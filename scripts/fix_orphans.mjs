import fs from 'fs';

const filesToFix = [
  'C:/Users/chri6/OneDrive/Desktop/jacksonville_house_cleaning_service/src/app/about/page.tsx',
  'C:/Users/chri6/OneDrive/Desktop/jacksonville_house_cleaning_service/src/app/extreme-deep-cleaning/page.tsx',
  'C:/Users/chri6/OneDrive/Desktop/jacksonville_house_cleaning_service/src/app/pricing/page.tsx',
  'C:/Users/chri6/OneDrive/Desktop/jacksonville_house_cleaning_service/src/app/recurring-cleaning/page.tsx'
];

filesToFix.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Replace the specific trailing sequence that causes the syntax error
    // "</div>\n    </>\n  );\n}"  ->  "</>\n  );\n}"
    
    // A robust regex to find the last </div> before </>
    content = content.replace(/<\/div>\s*<\/>\s*\);\s*}\s*$/, '</>\n  );\n}\n');

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`[FIXED]: ${filePath}`);
  }
});
