const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'src', 'data', 'localSeoPages.ts');
const dataContents = fs.readFileSync(dataPath, 'utf8');

const slugMatches = [...dataContents.matchAll(/slug:\s*'([^']+)'/g)];
const slugs = [...new Set(slugMatches.map((match) => match[1]))];

const template = (slug, titleFallback, canonicalUrl, keywords) => `import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === '${slug}');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? '${titleFallback}',
  description: pageData?.description ?? 'Jacksonville cleaning service information.',
  canonical: \`${canonicalUrl}\`,
  keywords: ${JSON.stringify(keywords)},
});

export default function ${toComponentName(slug)}() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
`;

const toComponentName = (slug) =>
  slug
    .replace(/-([a-z])/g, (_, char) => char.toUpperCase())
    .replace(/^\w/, (char) => char.toUpperCase())
    .replace(/[^a-zA-Z0-9]/g, '') + 'Page';

const toTitleFallback = (slug) =>
  slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());

const toKeywords = (slug) => [
  `${toTitleFallback(slug)} cleaning`,
  `${toTitleFallback(slug)} service`,
  'Jacksonville cleaning',
];

let createdCount = 0;

slugs.forEach((slug) => {
  const dir = path.join(__dirname, '..', 'src', 'app', slug);
  const filePath = path.join(dir, 'page.tsx');

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const titleFallback = toTitleFallback(slug);
  const canonicalUrl = `\${SITE_CONFIG.url}/${slug}`;
  const keywords = toKeywords(slug);

  fs.writeFileSync(filePath, template(slug, titleFallback, canonicalUrl, keywords), 'utf8');
  createdCount += 1;
});

console.log(`Generated ${createdCount} local SEO pages.`);
