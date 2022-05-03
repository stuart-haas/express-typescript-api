import { QueryBuilder } from '../abstracts/QueryBuilder';
import { INSERT_INTO, VALUES } from '../constants';
import { IQueryBuilder } from '../interfaces';
import { Model } from '../Model';

export class Create extends QueryBuilder implements IQueryBuilder {

  constructor(table: string, payload: Model) {
    super(table);
    const { values, params } = QueryBuilder.mapInsertParams(payload);
    this.values = values;
    this.params = params;
    this.query.raw = `${INSERT_INTO} ${table} ${VALUES}(${this.params}) $returning`;
  }
}