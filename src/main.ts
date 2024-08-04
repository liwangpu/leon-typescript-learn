import * as fs from 'fs';
import * as path from 'path';
import { readExcel, ExcelField } from './excel-reader';
import "reflect-metadata";
import { PlatformDTO } from './models';
// const filename = path.join(__dirname, '../', 'files', '虾皮本土.xlsx');
const filename = path.join(__dirname, '../', 'files', '虾皮本土1.xlsx');
// const filename = path.join(__dirname, '../', 'files', 'lazada本土.xlsx');

// const fn = path.dirname(filename);
// console.log(`1:`,path.basename(filename));
// console.log(`2:`,path.dirname(filename));



// ExcelField({});


// ExcelField.




(async () => {
  const datas = await readExcel<PlatformDTO>({
    filename,
    headerRowIndex: 1,
    DTO: PlatformDTO,
    outputJsonFile: path.join(__dirname, '../', 'temp', 'output.json'),
  });
  // // console.log(`datas:`, datas);

  // console.log(`datas count:`, datas.length);
})();
