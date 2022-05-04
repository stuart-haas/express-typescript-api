import { QueryBuilder } from '../abstracts/QueryBuilder';
import { ALL, FROM, SELECT } from '../constants';
import { IQueryBuilder } from '../interfaces';

export class Select extends QueryBuilder implements IQueryBuilder {

  constructor(table: string) {
    super(table);
    this.query.raw = `${SELECT} {columns} ${FROM} ${table} {where}`;
  }

  columns(columns: string[]): Select {
    this.query.columns = columns.length ? columns.join(', ') : ALL;
    return this;
  }
}