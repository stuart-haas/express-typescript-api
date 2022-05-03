import { QueryBuilder } from '../abstracts/QueryBuilder';
import { SET, UPDATE } from '../constants';
import { IColumn, IQueryBuilder } from '../interfaces';
import { Model } from '../Model';

export class Update extends QueryBuilder implements IQueryBuilder {

  constructor(table: string, payload: Model, columns: IColumn[]) {
    super(table, payload, columns);
    this.query.raw = `${UPDATE} ${table} ${SET} ${this.updateParams} $where $returning`;
  }
}