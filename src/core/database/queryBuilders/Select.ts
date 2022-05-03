import { QueryBuilder } from '../abstracts/QueryBuilder';
import { ALL, FROM, SELECT } from '../constants';
import { IQueryBuilder } from '../interfaces';

export class Select extends QueryBuilder implements IQueryBuilder {

  constructor(name: string) {
    super();
    this.name = name;
    this.cols = ALL;
  }

  columns(columns: string[]): Select {
    this.cols = columns.length ? columns.join(', ') : ALL;
    return this;
  }

  build(): string {
    return `${SELECT} ${this.cols} ${FROM} ${this.name}`;
  }
}