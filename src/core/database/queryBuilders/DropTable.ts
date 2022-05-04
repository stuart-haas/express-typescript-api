import { QueryBuilder } from '../abstracts/QueryBuilder';
import { DROP_TABLE, IF_EXISTS } from '../constants';
import { Placeholders } from '../enums';
import { IQueryBuilder } from '../interfaces';

export class DropTable extends QueryBuilder implements IQueryBuilder {

  constructor(table: string) {
    super(table);
    this.query.raw =  `${DROP_TABLE} ${Placeholders.IF_EXISTS} ${this.table}`;
  }

  ifExists(): DropTable {
    this.query.ifExists = IF_EXISTS;
    return this;
  }
}
