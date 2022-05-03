import { ALL } from '../constants';
import { Query } from '../interfaces';

export abstract class QueryBuilder {
  protected table: string;
  protected rawQuery: string;
  protected params: string;
  protected values = [];
  protected query: Query = {
    columns: ALL,
    where: '',
    returning: '',
    ifNotExists: '',
    ifExists: ''
  };

  constructor(table?: string) {
    this.table = table;
  }

  build() {
    const keys = Object.keys(this.query);
    keys.forEach((e: string) => {
      this.rawQuery = this.rawQuery.replace(`$${e}`, this.query[e]);
    });
    return this.rawQuery;
  }
}