import { QueryBuilder } from '../abstracts/QueryBuilder';
import { DELETE_FROM } from '../constants';
import { Placeholders } from '../enums';
import { IQueryBuilder } from '../interfaces';

export class Delete extends QueryBuilder implements IQueryBuilder {
  
  constructor(table: string) {
    super(table);
    this.query.raw = `${DELETE_FROM} ${table} ${Placeholders.WHERE} ${Placeholders.RETURNING}`;
  }
}