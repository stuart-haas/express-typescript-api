import { autoInjectable } from 'tsyringe';
import { Id } from '../constants';
import { IColumn } from '../interfaces';
import { Model } from '../Model';

@autoInjectable()
export class EntityMapper {
  
  mapColumns(model: Model, columns?: string[]) {
    const cols = this.getColumns(model);
    return cols.map((a: IColumn) => {
      const col = columns && columns.find((b: string) => a.name === b);
      if(col) return col;
      return null;
    }).filter((e: string) => e !== null);
  }

  getColumns(model: Model) {
    return Reflect.getMetadata('columns', model);
  }

  getPrimaryKey(model: Model): string {
    return Reflect.getMetadata('primaryKey', model) || Id;
  }
}