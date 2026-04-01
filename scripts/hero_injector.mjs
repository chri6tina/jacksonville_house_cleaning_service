import fs from 'fs';
import path from 'path';

const appDir = 'C:/Users/chri6/OneDrive/Desktop/jacksonville_house_cleaning_service/src/app';

// Regex to capture the standard Hero Block
const heroRegex = /\{\/\*[\s\S]*?Hero Section[\s\S]*?\*\/\}\s*<section[\s\S]*?<h1[^>]*>([\s\S]*?)<\/h1>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>[\s\S]*?<\/section>/i;
// Alternative regex for pages that don't have the comment
const fallbackRegex = /<section className="relative py-20 lg:py-24 overflow-hidden">[\s\S]*?<h1[^>]*>([\s\S]*?)<\/h1>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>[\s\S]*?<\/section>/i;

function cleanString(str) {
  if (!str) return '';
  // strip all HTML tags like <span> or <br>
  let text = str.replace(/<\/?[^>]+(>|$)/g, "");
  // strip newlines, collapse consecutive spaces
  text = text.replace(/[\r\n]+/g, " ");
  text = text.replace(/\s{2,}/g, " ");
  return text.trim();
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let originalContent = content;

  // Has UniversalServiceHero already been injected?
  if (content.includes('import UniversalServiceHero')) {
    return;
  }

  // Find the hero block
  let match = content.match(heroRegex) || content.match(fallbackRegex);
  
  if (match) {
    const rawTitle = match[1];
    const rawSubtitle = match[2];

    const cleanTitle = cleanString(rawTitle).replace(/"/g, '&quot;');
    const cleanSubtitle = cleanString(rawSubtitle).replace(/"/g, '&quot;');
    
    // Extract folder name for form tracking
    let folderMatch = filePath.match(/app[\\\/]([^\\\/]+)[\\\/]page\.tsx$/);
    const formServiceType = folderMatch ? folderMatch[1] : 'general';

    // Build standard injected Component
    const newHero = `<UniversalServiceHero 
        title="${cleanTitle}"
        subtitle="${cleanSubtitle}"
        Icon={Sparkles}
        primaryColor="blue"
        formServiceType="${formServiceType}"
      />`;

    // Drop it in
    content = content.replace(match[0], newHero);

    // Add Imports gracefully at the top (after lucide-react or Link)
    const importStatement = `import UniversalServiceHero from '@/components/UniversalServiceHero';\n`;
    
    if (content.match(/import Link from 'next\/link';/)) {
      content = content.replace(/import Link from 'next\/link';/, `import Link from 'next/link';\n${importStatement}`);
    } else {
       // if Link isn't there, put it below the first lucide-react import
       content = content.replace(/(import .* from 'lucide-react';)/, `$1\n${importStatement}`);
    }
    
    // Add Sparkles icon import if missing
    if (!content.includes('Sparkles')) {
      content = content.replace(/from 'lucide-react';/, `, Sparkles } from 'lucide-react';`);
    }

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`[INJECTED] UniversalServiceHero into ${filePath}`);
    }
  }
}

function scanDir(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
     const fullPath = path.join(dir, item);
     if (fs.statSync(fullPath).isDirectory()) {
         scanDir(fullPath);
     } else if (fullPath.endsWith('page.tsx')) {
         processFile(fullPath);
     }
  }
}

console.log("Starting Global Hero Engine...");
scanDir(appDir);
console.log("--- INJECTION COMPLETE ---");
