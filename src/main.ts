import * as fs from 'fs';
import * as path from 'path';
import { readExcel } from './excel-reader';

// const filename = path.join(__dirname, '../', 'files', '虾皮本土.xlsx');
const filename = path.join(__dirname, '../', 'files', 'a.xlsx');


(async () => {
  const datas = await readExcel({
    filename,
    worksheets: [1],
    headerRowIndex: 1,
  });
  console.log(`datas:`, datas);
})();

