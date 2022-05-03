import { QueryBuilder } from '../abstracts/QueryBuilder';
import { ALL, EQUAL, FROM, SELECT, WHERE } from '../constants';
import { IQueryBuilder } from '../interfaces';

export class Select extends QueryBuilder implements IQueryBuilder {

  constructor(name: string) {
    super();
    this.name = name;
  }

  columns(columns: string[]): Select {
    this.cols = columns.length ? columns.join(', ') : ALL;
    return this;
  }

  whereEqual(column: string, value: string | number | boolean): Select {
    this.where = `${WHERE} ${column} ${EQUAL} ${value}`;
    return this;
  }

  build(): string {
    return `${SELECT} ${this.cols} ${FROM} ${this.name} ${this.where}`;
  }
}