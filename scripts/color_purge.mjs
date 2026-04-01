import fs from 'fs';
import path from 'path';

// Directories to scan
const targetDirs = [
  'C:/Users/chri6/OneDrive/Desktop/jacksonville_house_cleaning_service/src/app',
  'C:/Users/chri6/OneDrive/Desktop/jacksonville_house_cleaning_service/src/components'
];

const colorMap = [
  // 600-700 level to primary-blue
  { regex: /bg-(purple|indigo|pink|teal|emerald)-(600|700)/g, replacement: 'bg-primary-blue' },
  { regex: /text-(purple|indigo|pink|teal|emerald)-(600|700)/g, replacement: 'text-primary-blue' },
  { regex: /border-(purple|indigo|pink|teal|emerald)-(600|700)/g, replacement: 'border-primary-blue' },
  { regex: /from-(purple|indigo|pink|teal|emerald)-(600|700)/g, replacement: 'from-primary-blue' },
  { regex: /to-(purple|indigo|pink|teal|emerald)-(600|700)/g, replacement: 'to-blue-600' },
  { regex: /ring-(purple|indigo|pink|teal|emerald)-(600|700)/g, replacement: 'ring-primary-blue' },

  // 100-200 level to blue-100 or blue-200
  { regex: /bg-(purple|indigo|pink|teal|emerald)-100/g, replacement: 'bg-blue-100' },
  { regex: /bg-(purple|indigo|pink|teal|emerald)-200/g, replacement: 'bg-blue-200' },
  { regex: /text-(purple|indigo|pink|teal|emerald)-100/g, replacement: 'text-blue-100' },
  { regex: /text-(purple|indigo|pink|teal|emerald)-200/g, replacement: 'text-blue-200' },
  { regex: /border-(purple|indigo|pink|teal|emerald)-100/g, replacement: 'border-blue-100' },
  { regex: /border-(purple|indigo|pink|teal|emerald)-200/g, replacement: 'border-blue-200' },

  // 50 level
  { regex: /bg-(purple|indigo|pink|teal|emerald)-50/g, replacement: 'bg-blue-50' },
  { regex: /text-(purple|indigo|pink|teal|emerald)-50/g, replacement: 'text-blue-50' },
  { regex: /border-(purple|indigo|pink|teal|emerald)-50/g, replacement: 'border-blue-50' },

  // Hover states 600-700
  { regex: /hover:bg-(purple|indigo|pink|teal|emerald)-(600|700)/g, replacement: 'hover:bg-primary-blue/90' },
  { regex: /hover:text-(purple|indigo|pink|teal|emerald)-(600|700)/g, replacement: 'hover:text-primary-blue' },
  
  // Custom Opacities (e.g. bg-purple-100/50 -> bg-blue-100/50)
  { regex: /(bg|text|border)-(purple|indigo|pink|teal|emerald)-(\d{2,3})\/(\d{2})/g, replacement: (match, p1, p2, p3, p4) => `${p1}-blue-${p3}/${p4}` },
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let originalContent = content;

  colorMap.forEach(mapping => {
    content = content.replace(mapping.regex, mapping.replacement);
  });

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`[UPDATED] ${filePath}`);
  }
}

function scanDir(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      scanDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      processFile(fullPath);
    }
  });
}

targetDirs.forEach(dir => scanDir(dir));
console.log('--- PURGE COMPLETE ---');
