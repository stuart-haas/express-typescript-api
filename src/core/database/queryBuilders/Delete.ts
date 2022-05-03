import { QueryBuilder } from '../abstracts/QueryBuilder';
import { DELETE_FROM } from '../constants';
import { IQueryBuilder } from '../interfaces';

export class Delete extends QueryBuilder implements IQueryBuilder {
  
  constructor(table: string) {
    super(table);
    this.query.raw = `${DELETE_FROM} ${table} $where $returning`;
  }
}