import { container, injectable, InjectionToken } from 'tsyringe';
import { QueryBuilder } from './abstracts/QueryBuilder';
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
    const cols = QueryBuilder.mapColumns(this.model, columns);
    const query = this.queryBuilderFactory.select(this.model.table).columns(cols).build();
    return await this.database.execute(query);
  }

  async findById(id: number, columns?: string[]): Promise<any> {
    const cols = QueryBuilder.mapColumns(this.model, columns);
    const primaryKey = QueryBuilder.getPrimaryKey(this.model);
    const query = this.queryBuilderFactory.select(this.model.table).columns(cols).whereEqual(primaryKey, id).build();
    return await this.database.execute(query);
  }

  async create(payload: Model) {
    const queryBuilder = this.queryBuilderFactory.create(this.model.table, payload).returning();
    return await this.database.execute(queryBuilder.build(), queryBuilder.payload);
  }

  async updateById(id: number, payload: Model) {
    const primaryKey = QueryBuilder.getPrimaryKey(this.model);
    const columns = QueryBuilder.getColumns(this.model);
    const query = this.queryBuilderFactory.update(this.model.table, payload, columns).whereEqual(primaryKey, id).returning().build();
    return await this.database.execute(query);
  }

  async deleteById(id: number) {
    const primaryKey = QueryBuilder.getPrimaryKey(this.model);
    const query = this.queryBuilderFactory.delete(this.model.table).whereEqual(primaryKey, id).returning().build();
    return await this.database.execute(query);
  }
}