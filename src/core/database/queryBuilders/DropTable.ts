import { QueryBuilder } from '../abstracts/QueryBuilder';
import { DROP_TABLE, IF_EXISTS } from '../constants';
import { IQueryBuilder } from '../interfaces';

export class DropTable extends QueryBuilder implements IQueryBuilder {

  constructor(table: string) {
    super(table);
    this.rawQuery =  `${DROP_TABLE} $ifExists ${this.table}`;
  }

  ifExists(): DropTable {
    this.query.ifExists = IF_EXISTS;
    return this;
  }

  build(): string {
    return super.build();
  }
}
