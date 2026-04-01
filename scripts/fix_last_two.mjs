import fs from 'fs';

let p1 = 'C:/Users/chri6/OneDrive/Desktop/jacksonville_house_cleaning_service/src/app/move-in-move-out/page.tsx';
let txt1 = fs.readFileSync(p1, 'utf-8');
txt1 = txt1.replace(/<\/section>\s*<\/>/g, '</section>\n      </div>\n    </>');
fs.writeFileSync(p1, txt1, 'utf-8');

let p2 = 'C:/Users/chri6/OneDrive/Desktop/jacksonville_house_cleaning_service/src/app/recurring-cleaning/page.tsx';
let txt2 = fs.readFileSync(p2, 'utf-8');
txt2 = txt2.replace(/<\/a>\s*<\/>/g, '</a>\n        </div>\n      </div>\n    </>');
fs.writeFileSync(p2, txt2, 'utf-8');

console.log("Fixed the final two files.");
