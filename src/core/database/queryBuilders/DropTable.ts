import { QueryBuilder } from '../abstracts/QueryBuilder';
import { DROP_TABLE, IF_EXISTS } from '../constants';
import { IQueryBuilder } from '../interfaces';

export class DropTable extends QueryBuilder implements IQueryBuilder {

  constructor(name: string) {
    super();
    this.name = name;
  }

  ifExists(): DropTable {
    this.options += IF_EXISTS;
    return this;
  }

  build(): string {
    return `${DROP_TABLE} ${this.options} ${this.name}`;
  }
}
