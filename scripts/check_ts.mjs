import { exec } from 'child_process';
import fs from 'fs';

exec('npx tsc --noEmit', (error, stdout, stderr) => {
  fs.writeFileSync('C:/Users/chri6/OneDrive/Desktop/jacksonville_house_cleaning_service/ts_errors.log', stdout + '\n' + stderr, 'utf-8');
  console.log('Wrote TS errors to ts_errors.log');
});
