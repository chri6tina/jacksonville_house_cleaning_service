import fs from 'fs';

let p1 = 'C:/Users/chri6/OneDrive/Desktop/jacksonville_house_cleaning_service/src/app/move-in-move-out/page.tsx';
let txt1 = fs.readFileSync(p1, 'utf-8');

// The file currently has:
//         </section>
//       </>
//   );
// }

// Let's replace the final section and fragment close with the missing div
txt1 = txt1.replace(/<\/section>[\s\S]*?<\/>/g, '</section>\n      </div>\n    </>');

fs.writeFileSync(p1, txt1, 'utf-8');
console.log("Fixed move-in-move-out exact mismatch");
