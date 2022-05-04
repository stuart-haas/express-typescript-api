import { autoInjectable } from 'tsyringe';
import { Model } from '../Model';
import { ColumnOptionsResolver } from '../resolvers/ColumnOptionsResolver';
import { Column, ColumnOptions } from '../types';

@autoInjectable()
export class TableMapper {

  constructor(private columnOptionsResolver: ColumnOptionsResolver) {}

  mapColumns(columns: Column[]): string {
    return columns.map((col: Column) => {
      const name = Object.keys(col)[0];
      const options = Object.values(col)[0];
      const mappedOptions = this.mapColumnOptions(options);
      return `${name} ${mappedOptions}`;
    }).join(', ');
  }

  getColumnValue(payload: Model, name: string) {
    if(typeof payload[name] === 'string') {
      return `'${payload[name]}'`;
    }
    return payload[name];
  }
  
  private mapColumnOptions(options: ColumnOptions) {
    return Object.keys(options).map((opt: string) => {
      if(Object.prototype.hasOwnProperty.call(options, opt)) {
        return this.columnOptionsResolver.resolve(opt, options[opt]);
      }
    }).join(' ');
  }
}