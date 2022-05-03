import { autoInjectable } from 'tsyringe';
import { Column } from './OptionsResolver';
import { Column as ColumnType, ColumnOptions } from './types';

@autoInjectable()
export class QueryBuilder {

  constructor(private optionsResolver: Column.OptionsResolver) {}

  async createTable (tableName: string, columns: ColumnType[]) {
    const cols = this.mapColumns(columns);
    return `CREATE TABLE IF NOT EXISTS ${tableName} (${cols})`;
  }
  
  async dropTable (tableName: string) {
    return `DROP TABLE IF EXISTS ${tableName}`;
  }

  private mapColumns(columns: ColumnType[]): string {
    return columns.map((col: ColumnType) => {
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