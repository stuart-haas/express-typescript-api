import { container, injectable, InjectionToken } from 'tsyringe';
import { Database } from './Database';
import { EntityMapper } from './mappers/EntityMapper';
import { Model } from './Model';
import { QueryBuilderFactory } from './QueryBuilderFactory';

@injectable()
export class Repository {

  model: Model;
  database: Database;
  entityMapper: EntityMapper;
  queryBuilderFactory: QueryBuilderFactory;

  constructor(model: InjectionToken<Model>) {
    this.model = container.resolve(model);
    this.database = container.resolve(Database);
    this.entityMapper = container.resolve(EntityMapper);
    this.queryBuilderFactory = container.resolve(QueryBuilderFactory);
  }

  async findAll(columns?: string[]): Promise<any> {
    const cols = this.entityMapper.mapColumns(this.model, columns);
    const query = this.queryBuilderFactory.select(this.model.table).columns(cols).build();
    return await this.database.execute(query);
  }

  async search(search?: any): Promise<any> {
    const query = this.queryBuilderFactory.select(this.model.table).where(search).build();
    return await this.database.execute(query);
  }

  async findById(id: number, columns?: string[]): Promise<any> {
    const cols = this.entityMapper.mapColumns(this.model, columns);
    const primaryKey = this.entityMapper.getPrimaryKey(this.model);
    const query = this.queryBuilderFactory.select(this.model.table).columns(cols).where({ [primaryKey]:  id }).build();
    return await this.database.execute(query);
  }

  async create(payload: Model) {
    const queryBuilder = this.queryBuilderFactory.create(this.model.table, payload).returning();
    return await this.database.execute(queryBuilder.build(), queryBuilder.values);
  }

  async updateById(id: number, payload: Model) {
    const primaryKey = this.entityMapper.getPrimaryKey(this.model);
    const query = this.queryBuilderFactory.update(this.model.table, payload).where({ [primaryKey]:  id }).returning().build();
    return await this.database.execute(query);
  }

  async deleteById(id: number) {
    const primaryKey = this.entityMapper.getPrimaryKey(this.model);
    const query = this.queryBuilderFactory.delete(this.model.table).where({ [primaryKey]:  id }).returning().build();
    return await this.database.execute(query);
  }
}