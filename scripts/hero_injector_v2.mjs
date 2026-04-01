import fs from 'fs';
import path from 'path';

const remainingPages = [
  'C:/Users/chri6/OneDrive/Desktop/jacksonville_house_cleaning_service/src/app/upholstery-cleaning/page.tsx',
  'C:/Users/chri6/OneDrive/Desktop/jacksonville_house_cleaning_service/src/app/post-construction-cleaning/page.tsx',
  'C:/Users/chri6/OneDrive/Desktop/jacksonville_house_cleaning_service/src/app/post-construction-cleaning/[service]/page.tsx',
  'C:/Users/chri6/OneDrive/Desktop/jacksonville_house_cleaning_service/src/app/organizing-services/page.tsx',
  'C:/Users/chri6/OneDrive/Desktop/jacksonville_house_cleaning_service/src/app/laundry-services/page.tsx',
  'C:/Users/chri6/OneDrive/Desktop/jacksonville_house_cleaning_service/src/app/green-cleaning/page.tsx',
  'C:/Users/chri6/OneDrive/Desktop/jacksonville_house_cleaning_service/src/app/garage-cleaning/page.tsx',
  'C:/Users/chri6/OneDrive/Desktop/jacksonville_house_cleaning_service/src/app/appliance-cleaning/page.tsx'
];

remainingPages.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');

    // Make sure we import the Universal Hero component
    if (!content.includes('import UniversalServiceHero')) {
      content = `import UniversalServiceHero from '@/components/UniversalServiceHero';\n` + content;
    }

    // Ensure Sparkles import exists
    if (!content.includes('Sparkles') && content.includes(`from 'lucide-react'`)) {
      content = content.replace(/import\s+{([^}]+)}\s+from\s+['"]lucide-react['"]/g, (match, p1) => {
        if (!p1.includes('Sparkles')) {
          return `import { ${p1.trim()}, Sparkles } from 'lucide-react'`;
        }
        return match;
      });
    } else if (!content.includes('Sparkles')) {
      content = `import { Sparkles } from 'lucide-react';\n` + content;
    }

    // Specialized Regex to target the 'min-h-[60vh]' layout
    const v2Regex = /\{\/\*\s*Hero Section\s*\*\/\}\s*<div[^>]*min-h-\[60vh\][\s\S]*?<h1[^>]*>([\s\S]*?)<\/h1>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/i;
    
    // We will use a more resilient extraction that looks for the h1 and p within the hero wrapper:
    const heroMatch = content.match(/\{\/\*\s*Hero Section[\s\S]*?<h1[^>]*>([\s\S]*?)<\/h1>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>[\s\S]*?<\/Link>\s*<\/div>\s*<\/div>\s*<\/div>/i);

    if (heroMatch) {
      const title = heroMatch[1].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
      const subtitle = heroMatch[2].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();

      const newHero = `
      <UniversalServiceHero 
        title="${title}"
        subtitle="${subtitle}"
        Icon={Sparkles}
        primaryColor="blue"
        formServiceType="${path.basename(path.dirname(filePath))}"
      />`;

      content = content.replace(/\{\/\*\s*Hero Section[\s\S]*?<h1[^>]*>([\s\S]*?)<\/h1>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>[\s\S]*?<\/Link>\s*<\/div>\s*<\/div>\s*<\/div>/gi, newHero);
      
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`[INJECTED OUTLIER V2] ${filePath}`);
    } else {
      console.log(`[SKIPPED] ${filePath} (Pattern not matched)`);
    }
  }
});
