import { NextResponse } from "next/server";
import type { SupabaseClient } from "@supabase/supabase-js";
import { SITE_CONFIG } from "@/lib/metadata";

type ConfiguredSupabaseClient = SupabaseClient<
  Record<string, never>,
  "public",
  string,
  Record<string, never>,
  Record<string, never>
>;

export type SeoTopic = {
  title: string;
  slug: string;
  primaryKeyword: string;
  intent: "local" | "commercial" | "informational";
  audience: string;
  angle: string;
  internalLinks: Array<{ label: string; href: string }>;
};

export type BlogRecord = {
  id?: string;
  title: string;
  slug: string;
  excerpt?: string | null;
  content?: string | null;
  author?: string | null;
  date?: string | null;
};

export const SEO_TOPICS: SeoTopic[] = [
  {
    title: "Jacksonville Move-Out Cleaning Checklist for Renters and Sellers",
    slug: "jacksonville-move-out-cleaning-checklist",
    primaryKeyword: "move out cleaning Jacksonville",
    intent: "commercial",
    audience: "renters, homeowners, real estate agents",
    angle: "inspection-ready checklist with local humidity, sand, and landlord deposit concerns",
    internalLinks: [
      { label: "move-in and move-out cleaning", href: "/move-in-move-out" },
      { label: "deep cleaning", href: "/deep-cleaning" },
      { label: "pricing", href: "/pricing" },
    ],
  },
  {
    title: "How Often Should Jacksonville Homes Schedule Recurring Cleaning?",
    slug: "recurring-cleaning-schedule-jacksonville-homes",
    primaryKeyword: "recurring cleaning Jacksonville",
    intent: "commercial",
    audience: "busy families and professionals",
    angle: "weekly, biweekly, and monthly cleaning cadence by household type",
    internalLinks: [
      { label: "recurring cleaning", href: "/recurring-cleaning" },
      { label: "standard cleaning", href: "/standard-cleaning" },
      { label: "family home cleaning", href: "/family-home-cleaning" },
    ],
  },
  {
    title: "Jacksonville Deep Cleaning Guide for Humidity, Mold, and Dust",
    slug: "jacksonville-deep-cleaning-humidity-mold-dust",
    primaryKeyword: "deep cleaning Jacksonville FL",
    intent: "commercial",
    audience: "homeowners dealing with Florida humidity",
    angle: "rooms and surfaces where Northeast Florida homes need deeper attention",
    internalLinks: [
      { label: "deep cleaning", href: "/deep-cleaning" },
      { label: "air duct cleaning", href: "/air-duct-cleaning" },
      { label: "green cleaning", href: "/green-cleaning" },
    ],
  },
  {
    title: "Best Cleaning Plan for Airbnb Turnovers in Jacksonville",
    slug: "airbnb-turnover-cleaning-plan-jacksonville",
    primaryKeyword: "Airbnb cleaning Jacksonville",
    intent: "commercial",
    audience: "short-term rental hosts",
    angle: "turnover workflow focused on reviews, guest readiness, and coastal traffic timing",
    internalLinks: [
      { label: "vacation rental cleaning", href: "/vacation-rental-cleaning" },
      { label: "same-day cleaning", href: "/same-day-cleaning-jacksonville" },
      { label: "laundry services", href: "/laundry-services" },
    ],
  },
  {
    title: "Apartment Cleaning Tips for Jacksonville Renters",
    slug: "apartment-cleaning-tips-jacksonville-renters",
    primaryKeyword: "apartment cleaning Jacksonville",
    intent: "informational",
    audience: "apartment renters",
    angle: "small-space cleaning plan for kitchens, bathrooms, floors, and move inspections",
    internalLinks: [
      { label: "apartment cleaning", href: "/apartment-cleaning" },
      { label: "move-out cleaning", href: "/move-out-cleaning-jacksonville" },
      { label: "standard cleaning", href: "/standard-cleaning" },
    ],
  },
  {
    title: "What Is Included in a Professional House Cleaning in Jacksonville?",
    slug: "what-is-included-professional-house-cleaning-jacksonville",
    primaryKeyword: "house cleaning Jacksonville",
    intent: "commercial",
    audience: "first-time cleaning customers",
    angle: "plain-English service scope, add-ons, and what to prepare before a cleaner arrives",
    internalLinks: [
      { label: "services", href: "/services" },
      { label: "standard cleaning", href: "/standard-cleaning" },
      { label: "contact", href: "/contact" },
    ],
  },
  {
    title: "Pet-Friendly Cleaning for Jacksonville Homes",
    slug: "pet-friendly-cleaning-jacksonville-homes",
    primaryKeyword: "pet friendly cleaning Jacksonville",
    intent: "commercial",
    audience: "dog and cat owners",
    angle: "odor, fur, floors, and safe product choices for pet households",
    internalLinks: [
      { label: "pet-friendly cleaning", href: "/pet-friendly-cleaning" },
      { label: "upholstery cleaning", href: "/upholstery-cleaning" },
      { label: "green cleaning", href: "/green-cleaning" },
    ],
  },
  {
    title: "Office Cleaning Checklist for Jacksonville Small Businesses",
    slug: "office-cleaning-checklist-jacksonville-small-business",
    primaryKeyword: "office cleaning Jacksonville",
    intent: "commercial",
    audience: "small business owners and office managers",
    angle: "healthy workplace checklist for reception, desks, restrooms, and break rooms",
    internalLinks: [
      { label: "office cleaning", href: "/office-cleaning" },
      { label: "commercial office cleaning", href: "/commercial-office-cleaning" },
      { label: "recurring cleaning", href: "/recurring-cleaning" },
    ],
  },
];

export const DEFAULT_INTERNAL_LINKS = [
  { trigger: /\bhouse cleaning\b/i, href: "/standard-cleaning" },
  { trigger: /\bdeep clean(?:ing)?\b/i, href: "/deep-cleaning" },
  { trigger: /\bmove[- ]?in\b/i, href: "/move-in-move-out" },
  { trigger: /\bmove[- ]?out\b/i, href: "/move-in-move-out" },
  { trigger: /\bmaid service\b/i, href: "/standard-cleaning" },
  { trigger: /\brecurring cleaning\b/i, href: "/recurring-cleaning" },
  { trigger: /\bAirbnb cleaning\b/i, href: "/vacation-rental-cleaning" },
  { trigger: /\boffice cleaning\b/i, href: "/office-cleaning" },
  { trigger: /\bpet[- ]friendly cleaning\b/i, href: "/pet-friendly-cleaning" },
];

export function unauthorizedIfInvalidCron(request: Request): NextResponse | null {
  const secret = process.env.CRON_SECRET?.trim();
  const authHeader = request.headers.get("authorization")?.trim();
  const xCronSecret = request.headers.get("x-cron-secret")?.trim();

  if (!secret && process.env.NODE_ENV === "development") return null;
  if (!secret) return new NextResponse("CRON_SECRET is not configured", { status: 503 });

  const bearer = authHeader?.startsWith("Bearer ") ? authHeader.slice(7).trim() : "";
  if (authHeader === `Bearer ${secret}` || bearer === secret || xCronSecret === secret) return null;

  return new NextResponse("Unauthorized", { status: 401 });
}

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-")
    .slice(0, 90);
}

export function stripCodeFence(raw: string): string {
  return raw.replace(/^```(?:json|markdown)?\s*\n?/i, "").replace(/\n?```\s*$/i, "").trim();
}

export function parseJsonObject<T extends Record<string, unknown>>(raw: string): T {
  const cleaned = stripCodeFence(raw);
  const match = cleaned.match(/\{[\s\S]*\}/);
  return JSON.parse(match ? match[0] : cleaned) as T;
}

export async function fetchExistingBlogs(supabase: ConfiguredSupabaseClient): Promise<BlogRecord[]> {
  const { data, error } = await supabase
    .from("blogs")
    .select("id, title, slug, excerpt, content, author, date")
    .order("date", { ascending: false })
    .limit(100);

  if (error) throw new Error(`Failed to read existing blogs: ${error.message}`);
  return (data ?? []) as BlogRecord[];
}

export function chooseNextSeoTopic(existingBlogs: BlogRecord[], today = new Date()): SeoTopic {
  const existingSlugs = new Set(existingBlogs.map((blog) => blog.slug));
  const existingTitles = existingBlogs.map((blog) => blog.title.toLowerCase());
  const candidates = SEO_TOPICS.filter(
    (topic) =>
      !existingSlugs.has(topic.slug) &&
      !existingTitles.some((title) => title.includes(topic.primaryKeyword.toLowerCase()))
  );
  const pool = candidates.length > 0 ? candidates : SEO_TOPICS;
  const dayIndex = Math.floor(today.getTime() / 86_400_000);
  return pool[dayIndex % pool.length];
}

export async function ensureUniqueSlug(
  supabase: ConfiguredSupabaseClient,
  desiredSlug: string,
  fallbackTitle: string
): Promise<string> {
  const base = slugify(desiredSlug || fallbackTitle) || slugify(fallbackTitle) || "jacksonville-cleaning-guide";
  let slug = base;

  for (let attempt = 1; attempt <= 30; attempt++) {
    const { data, error } = await supabase.from("blogs").select("id").eq("slug", slug).maybeSingle();
    if (error) throw new Error(`Failed to verify slug uniqueness: ${error.message}`);
    if (!data) return slug;
    slug = `${base}-${attempt}`;
  }

  return `${base}-${Date.now().toString(36)}`;
}

export function injectInternalLinks(content: string, topicLinks: SeoTopic["internalLinks"] = []): {
  content: string;
  changes: number;
} {
  let updated = content;
  let changes = 0;

  const rules = [
    ...topicLinks.map((link) => ({ trigger: new RegExp(`\\b${escapeRegExp(link.label)}\\b`, "i"), href: link.href })),
    ...DEFAULT_INTERNAL_LINKS,
  ];

  for (const rule of rules) {
    const hasTarget = new RegExp(`\\]\\(${escapeRegExp(rule.href)}\\)|href=["']${escapeRegExp(rule.href)}["']`, "i").test(updated);
    if (hasTarget) continue;

    const match = updated.match(rule.trigger);
    if (!match) continue;

    const index = match.index ?? 0;
    const before = updated.slice(Math.max(0, index - 120), index);
    const after = updated.slice(index, index + 120);
    if (before.includes("[") && after.includes("](")) continue;

    updated = updated.slice(0, index) + `[${match[0]}](${rule.href})` + updated.slice(index + match[0].length);
    changes++;
    if (changes >= 5) break;
  }

  return { content: updated, changes };
}

export function auditSeoDraft(input: {
  title: string;
  excerpt: string;
  content: string;
  topic: SeoTopic;
}): { passed: boolean; issues: string[]; wordCount: number } {
  const issues: string[] = [];
  const words = input.content.trim().split(/\s+/).filter(Boolean);
  const h2Count = (input.content.match(/^##\s+/gm) ?? []).length;

  if (words.length < 900) issues.push(`Article is too short (${words.length} words).`);
  if (!/jacksonville/i.test(`${input.title} ${input.excerpt} ${input.content}`)) {
    issues.push("Missing Jacksonville localization.");
  }
  if (!new RegExp(input.topic.primaryKeyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i").test(input.content)) {
    issues.push(`Missing primary keyword: ${input.topic.primaryKeyword}.`);
  }
  if (h2Count < 4) issues.push("Needs at least four H2 sections.");
  if (/\bconclusion\b/i.test(input.content)) issues.push("Uses a forbidden conclusion heading/phrase.");
  if (input.excerpt.length < 90 || input.excerpt.length > 180) {
    issues.push("Excerpt should be a search-friendly meta description around 90-180 characters.");
  }
  if (!/\[.+?\]\(\/.+?\)/.test(input.content)) issues.push("No internal links found.");

  return { passed: issues.length === 0, issues, wordCount: words.length };
}

export function buildWriterPrompt(topic: SeoTopic, recentTitles: string[]): string {
  return `Write one original, local SEO article for ${SITE_CONFIG.name}.

Topic: ${topic.title}
Primary keyword: ${topic.primaryKeyword}
Search intent: ${topic.intent}
Audience: ${topic.audience}
Local angle: ${topic.angle}
Avoid duplicating these recent titles: ${recentTitles.slice(0, 12).join(" | ") || "none"}

Requirements:
- Return ONLY valid JSON with keys: title, slug, excerpt, content, author.
- Write at least 1,100 words in Markdown.
- Include the primary keyword naturally in the title, intro, one H2, and body.
- Localize to Jacksonville, FL and nearby neighborhoods when useful.
- Include practical, specific cleaning advice, not generic filler.
- Include 4-7 H2 sections and 2-4 H3 sections.
- Include FAQ-style sections only when genuinely useful.
- Add natural internal Markdown links to these pages where relevant: ${topic.internalLinks
    .map((link) => `${link.label} (${link.href})`)
    .join(", ")}.
- Never use "Conclusion" or "In conclusion".
- End naturally with a helpful call to action for a free quote.
- Use author "Jacksonville Cleaning Team".`;
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
