import fs from 'fs';
import path from 'path';

const appDir = 'C:/Users/chri6/OneDrive/Desktop/jacksonville_house_cleaning_service/src/app';

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let originalContent = content;

  // Regex to detect and strip the orphaned </div> left behind by legacy Hero layouts
  content = content.replace(/<\/div>\s*<\/>\s*\);\s*}\s*$/, '</>\n  );\n}\n');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`[FIXED ORPHAN DIV]: ${filePath}`);
  }
}

function scanDir(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
     const fullPath = path.join(dir, item);
     if (fs.statSync(fullPath).isDirectory()) {
         scanDir(fullPath);
     } else if (fullPath.endsWith('page.tsx')) {
         fixFile(fullPath);
     }
  }
}

console.log("Starting Global Orphan Div Fixer...");
scanDir(appDir);
console.log("--- FIX COMPLETE ---");
