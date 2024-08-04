import * as dayjs from 'dayjs';
import * as Excel from 'exceljs';
import * as fs from 'fs';
import * as path from 'path';
import { isNil, isArray } from 'lodash';
import * as ExcelField from './excel-field';


export interface DTOConstructor {
  new(): any;
}

export interface IReadExcelProps {
  filename: string;
  worksheets?: (number | string)[];
  headerRowIndex: number;
  DTO: DTOConstructor;
  /**
   * 输出解析json文件
   */
  outputJsonFile?: string;
}

export async function readExcel<T = any>(props: IReadExcelProps): Promise<T[]> {
  const datas: any[] = [];
  const { filename, worksheets, headerRowIndex, DTO, outputJsonFile } = props;
  const dataMapping = new Map<string, string[]>();
  const dataTypeMapping = new Map<string, ExcelField.DataType>();

  // 解析dto元数据
  (() => {
    const dto = new DTO();
    const target = Object.getPrototypeOf(dto);
    const Metadata_Mapping: Map<string, ExcelField.IFieldMetadata> = Reflect.getOwnMetadata('Metadata_Mapping', target);
    // const Metadata_Mapping: Map<string, IFieldMetadata> = Reflect.getOwnMetadata('Metadata_Flags', target);

    Metadata_Mapping.forEach((metadata, property) => {
      dataMapping.set(property, metadata.title);
      dataTypeMapping.set(property, metadata.type);
    });

    console.log(`dto:`, Object.keys(dto));
  })();

  return;


  if (isNil(filename)) return datas;
  const workbook = new Excel.Workbook();
  if (!fs.existsSync(filename)) {
    throw new Error(`没有在 ${filename} 路径下找到任何文件!`);
  }
  await workbook.xlsx.readFile(filename);

  // 数据属性和表格列标映射
  const propertyColMap = new Map<number, string>();
  const headerTitlePropertyMap = new Map<string, string>();

  dataMapping.forEach((titles, property) => {
    for (const title of titles) {
      headerTitlePropertyMap.set(title, property);
    }
  });

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

      } else {
        if (!propertyColMap.size) return;
        const data: Record<string, any> = {};
        // 数据行
        row.eachCell((cell, colNumber) => {
          if (!propertyColMap.has(colNumber)) return;
          const property = propertyColMap.get(colNumber);
          const valueType = dataTypeMapping.get(property) || ExcelField.DataType.string;
          data[property] = dataTransfer({ value: cell.value, type: valueType });
        });
        datas.push(data);
      }

    });
  });

  if (!isNil(outputJsonFile)) {
    const outputDir = path.dirname(outputJsonFile);
    const outputFilename = path.basename(outputJsonFile);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir);
    }
    console.log(`title:`, path.join(outputDir, outputFilename));
    fs.writeFileSync(path.join(outputDir, outputFilename), JSON.stringify(datas, null, 4), { encoding: 'utf-8', });
  }
  return datas;
}

function dataTransfer(props: { value: any, type?: ExcelField.DataType }) {
  const { value, type } = props;
  switch (type) {
    case ExcelField.DataType.number:
      return Number(value);
    case ExcelField.DataType.date:
      if (!value) return null;
      const d = dayjs(value);
      return d.isValid() ? d.valueOf() : null;
    default:
      return value;
  }
}