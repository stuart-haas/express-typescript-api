import { autoInjectable } from 'tsyringe';
import { ColumnOptionsResolver } from '../resolvers/ColumnOptionsResolver';
import { Column, ColumnOptions } from '../types';

@autoInjectable()
export class ColumnMapper {

  constructor(private columnOptionsResolver: ColumnOptionsResolver) {}

  mapColumns(columns: Column[]): string {
    return columns.map((col: Column) => {
      const name = Object.keys(col)[0];
      const options = Object.values(col)[0];
      const mappedOptions = this.mapOptions(options);
      return `${name} ${mappedOptions}`;
    }).join(', ');
  }
  
  private mapOptions(options: ColumnOptions) {
    return Object.keys(options).map((opt: string) => {
      if(Object.prototype.hasOwnProperty.call(options, opt)) {
        return this.columnOptionsResolver.resolve(opt, options[opt]);
      }
    }).join(' ');
  }
}