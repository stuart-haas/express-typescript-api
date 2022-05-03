import { container, injectable, InjectionToken } from 'tsyringe';
import { Id, INSERT_INTO, RETURNING, TEXT, VARCHAR } from './constants';
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

  async findById(id: number, columns?: string[]): Promise<any> {
    const cols = this.getColumns(columns);
    const primaryKey = Reflect.getMetadata('primaryKey', this.model) || Id;
    const query = this.queryBuilderFactory.select(this.model.table).columns(cols).whereEqual(primaryKey, id).build();
    return await this.database.execute(query);
  }

  async create(payload: Model) {
    const queryBuilder = this.queryBuilderFactory.create(this.model.table, payload).returning();
    return await this.database.execute(queryBuilder.build(), queryBuilder.payload);
  }

  async updateById(id: number, payload: Model) {
    const keys = Object.keys(payload);
    const params = keys.map((e: string) => `${e} = ${this.getColumnValue(e, payload)}`).join(', ');
    const query = `UPDATE ${this.model.table} SET ${params} WHERE id = ${id} RETURNING *`;
    return await this.database.execute(query);
  }

  async deleteById(id: number) {
    const query = `DELETE FROM ${this.model.table} WHERE id = ${id} RETURNING *`;
    return await this.database.execute(query);
  }

  private getColumns(columns?: string[]) {
    const cols = Reflect.getMetadata('columns', this.model);
    return cols.map((a: IColumn) => {
      const col = columns && columns.find((b: string) => a.name === b);
      if(col) return col;
      return null;
    }).filter((e: string) => e !== null);
  }

  private getColumnValue(name: string, payload: Model) {
    const columns = Reflect.getMetadata('columns', this.model);
    const col = columns.find((e: IColumn) => {
      return e.name === name;
    });
    // TODO: Add value mapper class based on data type
    if(col.type.includes(VARCHAR) || col.type.includes(TEXT)) {
      return `'${payload[name]}'`;
    }
    return payload[name];
  }
}