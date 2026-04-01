import fs from 'fs';
import path from 'path';

const appDir = 'C:/Users/chri6/OneDrive/Desktop/jacksonville_house_cleaning_service/src/app';

function ensureImports(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let originalContent = content;

  // 1. Check if UniversalServiceHero is used but not imported
  if (content.includes('<UniversalServiceHero') && !content.includes('import UniversalServiceHero')) {
    content = `import UniversalServiceHero from '@/components/UniversalServiceHero';\n` + content;
  }

  // 2. Check if Sparkles is used
  if (content.includes('Icon={Sparkles}') && !content.includes('Sparkles')) {
    // If lucide-react is already imported, we try to append Sparkles to it
    if (content.includes(`from 'lucide-react'`)) {
      content = content.replace(/import\s+{([^}]+)}\s+from\s+['"]lucide-react['"]/g, (match, p1) => {
        if (!p1.includes('Sparkles')) {
          return `import { ${p1.trim()}, Sparkles } from 'lucide-react'`;
        }
        return match;
      });
    } else {
      content = `import { Sparkles } from 'lucide-react';\n` + content;
    }
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`[IMPORTS FIXED]: ${filePath}`);
  }
}

function scanDir(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
     const fullPath = path.join(dir, item);
     if (fs.statSync(fullPath).isDirectory()) {
         scanDir(fullPath);
     } else if (fullPath.endsWith('page.tsx')) {
         ensureImports(fullPath);
     }
  }
}

console.log("Starting Import Auto-Fixer...");
scanDir(appDir);
console.log("--- AUTO-FIX COMPLETE ---");
