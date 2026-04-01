import fs from 'fs';

const files = [
  'C:/Users/chri6/OneDrive/Desktop/jacksonville_house_cleaning_service/src/app/family-home-cleaning/page.tsx',
  'C:/Users/chri6/OneDrive/Desktop/jacksonville_house_cleaning_service/src/app/free-pickup/[category]/page.tsx',
  'C:/Users/chri6/OneDrive/Desktop/jacksonville_house_cleaning_service/src/app/free-pickup/page.tsx',
  'C:/Users/chri6/OneDrive/Desktop/jacksonville_house_cleaning_service/src/app/golf-community-cleaning/page.tsx',
  'C:/Users/chri6/OneDrive/Desktop/jacksonville_house_cleaning_service/src/app/luxury-home-cleaning/page.tsx',
  'C:/Users/chri6/OneDrive/Desktop/jacksonville_house_cleaning_service/src/app/pricing/page.tsx',
  'C:/Users/chri6/OneDrive/Desktop/jacksonville_house_cleaning_service/src/app/testimonials/page.tsx',
  'C:/Users/chri6/OneDrive/Desktop/jacksonville_house_cleaning_service/src/app/vacation-home-cleaning/page.tsx'
];

files.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    content = `import { Sparkles } from 'lucide-react';\n` + content;
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`[IMPORTED SPARKLES]: ${filePath}`);
  } else {
    console.error(`Missing file: ${filePath}`);
  }
});
