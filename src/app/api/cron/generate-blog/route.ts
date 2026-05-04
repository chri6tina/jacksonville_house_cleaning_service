import { NextResponse } from "next/server";
import OpenAI from "openai";
import { logAgentExecution } from "@/lib/agents";
import { getServiceRoleClient } from "@/lib/supabase";
import {
  auditSeoDraft,
  buildWriterPrompt,
  chooseNextSeoTopic,
  ensureUniqueSlug,
  fetchExistingBlogs,
  injectInternalLinks,
  parseJsonObject,
  unauthorizedIfInvalidCron,
} from "@/lib/seo-autonomy";

export const dynamic = "force-dynamic";
export const maxDuration = 300;

export async function GET(request: Request) {
  const unauthorized = unauthorizedIfInvalidCron(request);
  if (unauthorized) return unauthorized;

  const url = new URL(request.url);

  try {
    if (!process.env.OPENAI_API_KEY) {
      throw new Error("OPENAI_API_KEY is not configured.");
    }

    const supabase = getServiceRoleClient();
    const existingBlogs = await fetchExistingBlogs(supabase);
    const topic = chooseNextSeoTopic(existingBlogs);
    const recentTitles = existingBlogs.map((blog) => blog.title);

    if (url.searchParams.get("dryRun") === "1") {
      return NextResponse.json({
        success: true,
        dryRun: true,
        nextTopic: topic,
        existingBlogCount: existingBlogs.length,
      });
    }

    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are an expert local SEO editor for a Jacksonville house cleaning company. Write useful, specific, human articles that can rank without sounding synthetic.",
        },
        {
          role: "user",
          content: buildWriterPrompt(topic, recentTitles),
        },
      ],
      response_format: { type: "json_object" },
    });

    const aiResponse = parseJsonObject<{
      title?: string;
      slug?: string;
      excerpt?: string;
      content?: string;
      author?: string;
    }>(completion.choices[0].message.content || "{}");

    const title = String(aiResponse.title || topic.title).trim();
    const excerpt = String(aiResponse.excerpt || "").trim();
    const rawContent = String(aiResponse.content || "").trim();
    const slug = await ensureUniqueSlug(supabase, String(aiResponse.slug || topic.slug), title);
    const linked = injectInternalLinks(rawContent, topic.internalLinks);
    const audit = auditSeoDraft({ title, excerpt, content: linked.content, topic });

    if (!audit.passed) {
      await logAgentExecution(
        "AI_Blog_Writer",
        "FAILED",
        `Rejected draft for "${topic.title}": ${audit.issues.join(" ")}`
      );
      return NextResponse.json({ success: false, rejected: true, audit }, { status: 422 });
    }

    const blogPost = {
      title,
      slug,
      excerpt,
      content: linked.content,
      author: aiResponse.author || "Jacksonville Cleaning Team",
    };

    const { data: insertedData, error: dbError } = await supabase
      .from("blogs")
      .insert([blogPost])
      .select()
      .single();

    if (dbError) {
      throw new Error(`Failed to save to Supabase: ${dbError.message}`);
    }

    try {
      const { sendTelegramMessage } = await import("@/lib/telegram");
      const articleUrl = `https://www.jacksonvillehousecleaningservice.com/blog/${slug}`;
      await sendTelegramMessage(
        `🚀 <b>New Auto-Blog Published</b>\n\n<b>Title:</b> ${title}\n<b>Keyword:</b> ${topic.primaryKeyword}\n<b>Words:</b> ${audit.wordCount}\n<b>Internal links added:</b> ${linked.changes}\n\n<a href="${articleUrl}">View Live Article</a>`
      );
    } catch (error) {
      console.error("Non-fatal Telegram notification error", error);
    }

    await logAgentExecution(
      "AI_Blog_Writer",
      "SUCCESS",
      `Published "${title}" targeting "${topic.primaryKeyword}" at /blog/${slug}. Word count: ${audit.wordCount}. Internal links added: ${linked.changes}.`
    );

    return NextResponse.json({
      success: true,
      message: "AI Blog successfully generated and saved to Supabase.",
      post: insertedData,
      audit,
      topic,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Error in AI Blog Pipeline:", error);
    await logAgentExecution("AI_Blog_Writer", "FAILED", message);
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
