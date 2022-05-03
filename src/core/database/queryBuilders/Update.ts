import { QueryBuilder } from '../abstracts/QueryBuilder';
import { SET, UPDATE } from '../constants';
import { IColumn, IQueryBuilder } from '../interfaces';
import { Model } from '../Model';

export class Update extends QueryBuilder implements IQueryBuilder {

  constructor(table: string, payload: Model, columns: IColumn[]) {
    super(table);
    const { values, params } = QueryBuilder.mapUpdateParams(payload, columns);
    this.values = values;
    this.params = params;
    this.query.raw = `${UPDATE} ${table} ${SET} ${this.params} $where $returning`;
  }
}