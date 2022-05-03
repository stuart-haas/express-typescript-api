import { Database } from './Database';
import { QueryBuilder } from './QueryBuilder';

export class Migration {
  constructor(protected database: Database, protected queryBuilder: QueryBuilder) {}
}