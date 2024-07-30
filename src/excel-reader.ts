import * as dayjs from 'dayjs';
import * as Excel from 'exceljs';
import * as fs from 'fs';
import { isNil } from 'lodash';

export interface IDataMapping {
  [property: string]: string[];
}

export interface IDataTypeMapping {
  [property: string]: DataType;
}

export enum DataType {
  number = 'number',
  string = 'string',
  date = 'date',
}

export interface IReadExcelProps {
  filename: string;
  worksheets?: (number | string)[];
  headerRowIndex: number;
  dataMapping: IDataMapping;
  dataTypeMapping?: IDataTypeMapping;
}

export async function readExcel<T = any>(props: IReadExcelProps): Promise<T[]> {
  const datas: any[] = [];
  const { filename, worksheets, headerRowIndex, dataMapping, dataTypeMapping } = props;
  console.log(`filePath:`, filename);
  if (isNil(filename)) return datas;
  const workbook = new Excel.Workbook();
  if (!fs.existsSync(filename)) {
    throw new Error(`没有在 ${filename} 路径下找到任何文件!`);
  }
  await workbook.xlsx.readFile(filename);

  // 数据属性和表格列标映射
  const propertyColMap = new Map<number, string>();
  const headerTitlePropertyMap = new Map<string, string>();
  (() => {
    const properties = Object.keys(dataMapping);
    for (const property of properties) {
      const titles = dataMapping[property] || [];
      for (const title of titles) {
        headerTitlePropertyMap.set(title, property);
      }
    }
  })();



  workbook.eachSheet((sheet, sheetId) => {
    sheet.eachRow((row, rowIndex) => {
      if (rowIndex < headerRowIndex) return;
      // 标题行
      if (rowIndex === headerRowIndex) {
        row.eachCell((cell, colNumber) => {
          let title = cell.value;
          if (isNil(title)) return;
          title = `${title}`.trim();
          if (!headerTitlePropertyMap.has(title)) return;
          const property = headerTitlePropertyMap.get(title);
          propertyColMap.set(colNumber, property);
        });
        // console.log(`propertyColMap:`, propertyColMap);
      } else {
        if (!propertyColMap.size) return;
        const data: Record<string, any> = {};
        // 数据行
        row.eachCell((cell, colNumber) => {
          if (!propertyColMap.has(colNumber)) return;
          const property = propertyColMap.get(colNumber);
          const valueType = dataTypeMapping[property] || DataType.string;
          data[property] = dataTransfer({ value: cell.value, type: valueType });
        });
        datas.push(data);
      }

      // row.eachCell();

    });
  });
  return datas;
}

function dataTransfer(props: { value: any, type?: DataType }) {
  const { value, type } = props;
  switch (type) {
    case DataType.number:
      return Number(value);
    case DataType.date:
      if (!value) return null;
      const d = dayjs(value);
      return d.isValid() ? d.valueOf() : null;
    default:
      return value;
  }
}