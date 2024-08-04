import { isArray } from 'lodash';

export enum ExcelFieldMetadata {
  metadatas = 'metadatas',
  flags = 'flags'
}

export enum DataType {
  number = 'number',
  string = 'string',
  date = 'date',
}

export interface IFieldMetadata {
  title: string[];
  type?: DataType;
  flag?: string;
}

export function Field(props: {
  title: string | string[],
  type?: DataType,
  flag?: string | string[];
}): PropertyDecorator {
  const { title, type, flag } = props;
  return (target: any, property: string) => {
    if (!title.length) return;
    const metadataMapping: Map<string, IFieldMetadata> = Reflect.getOwnMetadata(ExcelFieldMetadata.metadatas, target) || new Map<string, IFieldMetadata>();
    const flagMapping: Map<string, string[]> = Reflect.getOwnMetadata(ExcelFieldMetadata.flags, target) || new Map<string, string[]>();
    const metadata = metadataMapping.get(property) || {
      title: [],
      type: type || DataType.string
    };

    const setPropertyToFlag = (f: string) => {
      if (!f) return;
      const properties = flagMapping.get(f) || [];
      properties.push(property);
      flagMapping.set(f, properties);
    };

    if (isArray(flag)) {
      flag.forEach(f => setPropertyToFlag(f));
    } else {
      setPropertyToFlag(flag);
    }


    if (isArray(title)) {
      metadata.title = title;
    } else {
      metadata.title = [title];
    }

    metadataMapping.set(property, metadata);
    Reflect.defineMetadata(ExcelFieldMetadata.metadatas, metadataMapping, target);
    Reflect.defineMetadata(ExcelFieldMetadata.flags, flagMapping, target);
  }
}

export function getMetadata<M>(obj: any, metadata: ExcelFieldMetadata): M {
  const target = Object.getPrototypeOf(obj);
  return Reflect.getOwnMetadata(metadata, target);
}

export function getFlagFields(props: {
  obj: any,
  flag?: string | string[];
}) {
  const { obj, flag } = props;
  const flagMapping: Map<string, string[]> = getMetadata(obj, ExcelFieldMetadata.flags);

  const fields: string[] = [];
  if (!flag) return fields;
  const pushPropertyToFields = (f: string) => {
    const properties = flagMapping.get(f) || [];
    properties.forEach(p => fields.push(p));
  };

  if (isArray(flag)) {
    flag.forEach(f => {
      pushPropertyToFields(f);
    });
  } else {
    pushPropertyToFields(flag);
  }
  return fields;
}
