import { QueryBuilder } from '../abstracts/QueryBuilder';
import { INSERT_INTO, VALUES } from '../constants';
import { IQueryBuilder } from '../interfaces';
import { Model } from '../Model';

export class Create extends QueryBuilder implements IQueryBuilder {

  constructor(table: string, payload: Model) {
    super(table, payload);
    this.query.raw = `${INSERT_INTO} ${table} ${VALUES}(${this.insertParams}) $returning`;
  }
}