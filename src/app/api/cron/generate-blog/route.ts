import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { getServiceRoleClient } from '@/lib/supabase';

export async function GET(request: Request) {
  // Simple auth to prevent unauthorized cron triggers
  const authHeader = request.headers.get('authorization');
  if (process.env.NODE_ENV !== 'development' && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response('Unauthorized', { status: 401 });
  }

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY || 'dummy_key',
  });

  try {
    // 1. Generate Blog Content using OpenAI
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { 
          role: "system", 
          content: "You are an expert SEO content writer for a local Jacksonville House Cleaning Service. You write heavily optimized, informative, and engaging blog posts in clear JSON format."
        },
        { 
          role: "user", 
          content: `Write a localized SEO blog post about house cleaning in Jacksonville, FL. 
          Pick a random, hyper-relevant topic (e.g., 'Combatting humidity mold in Florida homes', 'Spring cleaning tips for Jacksonville apartments', etc.).
          
          CRITICAL RULES:
          1. NEVER use the word "Conclusion" or "In conclusion" as a heading or in the text. It sounds like AI. End the article naturally with a compelling final thought or call to action.
          2. Write in a highly professional, human, and engaging tone. Avoid generic AI fluff.

          Return your response EXACTLY as a JSON object with this shape:
          {
            "title": "A catchy, SEO-optimized title",
            "slug": "url-friendly-slug",
            "excerpt": "A two-sentence meta description.",
            "content": "The full blog post content formatted beautifully in Markdown, spanning at least 1,200 words, utilizing extensive H2s, H3s, actionable bullet points, and deep dive sections for maximum SEO value.",
            "author": "Jacksonville Cleaning Team"
          }`
        }
      ],
      response_format: { type: "json_object" }
    });

    const aiResponse = JSON.parse(completion.choices[0].message.content || "{}");
    
    // Fallback data mapping
    const blogPost = {
      title: aiResponse.title,
      slug: aiResponse.slug,
      excerpt: aiResponse.excerpt,
      content: aiResponse.content,
      author: aiResponse.author || "Jacksonville Cleaning Team",
    };

    // 2. Push directly to Supabase PostreSQL
    const supabase = getServiceRoleClient();
    
    // We use the Service Role Client to bypass Row Level Security 
    // since this is a secure, server-side autonomous cron job.
    const { data: insertedData, error: dbError } = await supabase
      .from('blogs')
      .insert([blogPost])
      .select()
      .single();

    if (dbError) {
      console.error('Database Insertion Error:', dbError);
      throw new Error(`Failed to save to Supabase: ${dbError.message}`);
    }

    // 3. Dispatch Live Telegram Alert!
    try {
      const { sendTelegramMessage } = await import('@/lib/telegram');
      const articleUrl = `https://jacksonvillehousecleaningservice.com/blog/${aiResponse.slug}`;
      const msg = `🚀 <b>New Auto-Blog Published!</b>\n\n🤖 <b>Title:</b> ${aiResponse.title}\n\n<i>The AI Bot has successfully generated a 1,200+ word semantic SEO article and pushed it into your database.</i>\n\n🔗 <a href="${articleUrl}">View Live Article</a>`;
      await sendTelegramMessage(msg);
    } catch (e) {
      console.error("Non-fatal Telegram notification error", e);
    }

    return NextResponse.json({ 
      success: true, 
      message: 'AI Blog successfully generated and saved to Supabase!',
      post: insertedData
    });

  } catch (error: any) {
    console.error('Error in AI Blog Pipeline:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
