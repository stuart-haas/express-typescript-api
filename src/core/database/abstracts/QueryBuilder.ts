import { ALL, EQUAL, RETURNING, TEXT, VARCHAR, WHERE } from '../constants';
import { IColumn, IQuery } from '../interfaces';
import { Model } from '../Model';

export abstract class QueryBuilder {

  protected table: string;
  protected payload: Model;
  protected modelColumns: IColumn[];
  protected query: IQuery = {
    columns: ALL,
    raw: null,
    where: null,
    returning: null,
    ifNotExists: null,
    ifExists: null
  };

  constructor(table?: string, payload?: Model, columns?: IColumn[]) {
    this.table = table;
    this.payload = payload;
    this.modelColumns = columns;
  }

  whereEqual(column: string, value: string | number | boolean): QueryBuilder {
    this.query.where = `${WHERE} ${column} ${EQUAL} ${value}`;
    return this;
  }

  returning(): QueryBuilder {
    this.query.returning = RETURNING;
    return this;
  }

  build() {
    const keys = Object.keys(this.query);
    keys.forEach((e: string) => {
      this.query.raw = this.query.raw.replace(`$${e}`, this.query[e] ? this.query[e] : '');
    });
    return this.query.raw;
  }

  private getColumnValue(name: string) {
    const col = this.modelColumns.find((e: IColumn) => {
      return e.name === name;
    });
    // TODO: Add value mapper class based on data type
    if(col.type.includes(VARCHAR) || col.type.includes(TEXT)) {
      return `'${this.payload[name]}'`;
    }
    return this.payload[name];
  }

  get values() {
    return Object.values(this.payload);
  }

  protected get insertParams() {
    return this.values.map((e: string | number, i: number) => `$${i + 1}`).join(', ');
  }

  protected get updateParams() {
    return Object.keys(this.payload).map((e: string) => `${e} = ${this.getColumnValue(e)}`).join(', ');
  }
}