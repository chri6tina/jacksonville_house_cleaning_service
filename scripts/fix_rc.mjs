import fs from 'fs';

let p2 = 'C:/Users/chri6/OneDrive/Desktop/jacksonville_house_cleaning_service/src/app/recurring-cleaning/page.tsx';
let txt2 = fs.readFileSync(p2, 'utf-8');
// Fix the ending exactly to what React expects: close the a tag, close the FAButton div, close fragment.
txt2 = txt2.replace(/<\/a>[\s\S]*?\);/g, '</a>\n        </div>\n    </>\n  );');
fs.writeFileSync(p2, txt2, 'utf-8');

console.log("Fixed recurring-cleaning exact AST match.");
