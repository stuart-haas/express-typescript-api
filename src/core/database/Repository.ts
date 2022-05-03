import { container, injectable, InjectionToken } from 'tsyringe';
import { Database } from './Database';
import { IColumn } from './interfaces';
import { Model } from './Model';
import { QueryBuilderFactory } from './QueryBuilderFactory';

@injectable()
export class Repository {
  model: Model;
  database: Database;
  queryBuilderFactory: QueryBuilderFactory;

  constructor(model: InjectionToken<Model>) {
    this.model = container.resolve(model);
    this.database = container.resolve(Database);
    this.queryBuilderFactory = container.resolve(QueryBuilderFactory);
  }

  async findAll(columns?: string[]): Promise<any> {
    const cols = this.getColumns(columns);
    const query = this.queryBuilderFactory.select(this.model.table).columns(cols).build();
    return await this.database.execute(query);
  }

  async create(payload: Model) {
    const vals = Object.values(payload);
    const valsIterator = vals.map((e: string | number, i: number) => `$${i + 1}`).join(', ');
    const query = `INSERT INTO ${this.model.table} VALUES(${valsIterator}) RETURNING *`;
    return await this.database.execute(query, vals);
  }

  private getColumns(columns?: string[]) {
    const columnsMeta = Reflect.getMetadata('columns', this.model);
    const matchingColumns = columnsMeta.map((a: IColumn) => {
      const col = columns && columns.find((b: string) => a.name === b);
      if(col) return col;
      return null;
    }).filter((e: string) => e !== null);
    return matchingColumns;
  }
}