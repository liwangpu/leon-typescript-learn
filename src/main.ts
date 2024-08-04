import * as fs from 'fs';
import * as path from 'path';
import { readExcel, ExcelField } from './excel-reader';
import "reflect-metadata";
import { PlatformDTO } from './models';
// const filename = path.join(__dirname, '../', 'files', '虾皮本土.xlsx');
const filename = path.join(__dirname, '../', 'files', '虾皮本土1.xlsx');
// const filename = path.join(__dirname, '../', 'files', 'lazada本土.xlsx');

// const dto = new PlatformDTO();

// const fields = ExcelField.getFlagFields({ obj: dto, flag: 'production' });
// console.log(`fields:`, fields);

(async () => {
  const datas = await readExcel<PlatformDTO>({
    filename,
    headerRowIndex: 1,
    DTO: PlatformDTO,
    outputJsonFile: path.join(__dirname, '../', 'temp', 'output.json'),
  });
  // // console.log(`datas:`, datas);

  console.log(`datas count:`, datas.length);
})();
