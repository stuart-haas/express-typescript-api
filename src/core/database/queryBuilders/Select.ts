import { QueryBuilder } from '../abstracts/QueryBuilder';
import { ALL, EQUAL, FROM, SELECT, WHERE } from '../constants';
import { IQueryBuilder } from '../interfaces';

export class Select extends QueryBuilder implements IQueryBuilder {

  constructor(table: string) {
    super(table);
    this.rawQuery = `${SELECT} $columns ${FROM} ${table} $where`;
  }

  columns(columns: string[]): Select {
    this.query.columns = columns.length ? columns.join(', ') : ALL;
    return this;
  }

  whereEqual(column: string, value: string | number | boolean): Select {
    this.query.where = `${WHERE} ${column} ${EQUAL} ${value}`;
    return this;
  }

  build(): string {
    return super.build();
  }
}