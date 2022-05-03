import { Database } from '../Database';
import { QueryBuilderFactory } from '../QueryBuilderFactory';

export abstract class Migration {
  constructor(protected database: Database, protected queryBuilderFactory: QueryBuilderFactory) {}
}