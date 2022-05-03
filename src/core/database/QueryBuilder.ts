import { autoInjectable } from 'tsyringe';
import { ColumnOptionsResolver } from './ColumnOptionsResolver';
import { Column, ColumnOptions } from './types';

@autoInjectable()
export class QueryBuilder {

  constructor(private optionsResolver: ColumnOptionsResolver) {}

  createTable (tableName: string, columns: Column[]) {
    const cols = this.mapColumns(columns);
    return `CREATE TABLE IF NOT EXISTS ${tableName} (${cols})`;
  }
  
  dropTable (tableName: string) {
    return `DROP TABLE IF EXISTS ${tableName}`;
  }

  private mapColumns(columns: Column[]): string {
    return columns.map((col: Column) => {
      const name = Object.keys(col)[0];
      const options = Object.values(col)[0];
      const parsedOptions = this.mapOptions(options);
      return `${name} ${parsedOptions}`;
    }).join(', ');
  }
  
  private mapOptions(options: ColumnOptions) {
    return Object.keys(options).map((opt: string) => {
      if(Object.prototype.hasOwnProperty.call(options, opt)) {
        return this.optionsResolver.resolve(opt, options[opt]);
      }
    }).join(' ');
  }
}