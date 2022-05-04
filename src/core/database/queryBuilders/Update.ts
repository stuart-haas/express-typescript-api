import { QueryBuilder } from '../abstracts/QueryBuilder';
import { SET, UPDATE } from '../constants';
import { IQueryBuilder } from '../interfaces';
import { Model } from '../Model';

export class Update extends QueryBuilder implements IQueryBuilder {

  constructor(table: string, payload: Model) {
    super(table, payload);
    this.query.raw = `${UPDATE} ${table} ${SET} ${this.updateParams} {where} {returning}`;
  }
}