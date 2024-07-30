import * as Excel from 'exceljs';
import * as dayjs from 'dayjs';
import * as fs from 'fs';
import * as path from 'path';
import { isNil } from 'lodash';

export interface IReadExcelProps {
  filename: string;
  worksheets: (number | string)[];
  headerRowIndex: number;
}

export async function readExcel<T = any>(props: IReadExcelProps): Promise<T[]> {
  const datas: any[] = [];
  const { filename, worksheets, headerRowIndex } = props;
  console.log(`filePath:`, filename);
  if (isNil(filename) || !worksheets.length) return datas;
  const workbook = new Excel.Workbook();
  if (!fs.existsSync(filename)) {
    throw new Error(`没有在 ${filename} 路径下找到任何文件!`);
  }
  await workbook.xlsx.readFile(filename);
  for (const ws of worksheets) {
    const sheet = workbook.getWorksheet(ws);

    console.log(`ws:`, ws);
    console.log(`sheet:`, sheet);
    if (sheet) {

      // sheet.eachRow((row, rowIndex) => {
      //   console.log(`rowIndex:`, rowIndex);
      // });
    }
  }

  return datas;
}