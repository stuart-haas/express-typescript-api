import { ALL, AND, EQUAL, RETURNING, WHERE } from '../constants';
import { IQuery } from '../interfaces';
import { Model } from '../Model';

export abstract class QueryBuilder {

  protected table: string;
  protected payload: Model;
  protected query: IQuery = {
    columns: ALL,
    raw: null,
    where: null,
    returning: null,
    ifNotExists: null,
    ifExists: null
  };

  constructor(table?: string, payload?: Model) {
    this.table = table;
    this.payload = payload;
  }

  where(search?: any) {
    const params = search && Object.keys(search).map((e => `${e} ${EQUAL} '${search[e]}'`)).join(` ${AND} `);
    this.query.where = `${params ? WHERE : ''} ${params}`;
    return this;
  }

  returning(): QueryBuilder {
    this.query.returning = RETURNING;
    return this;
  }

  build(): string {
    return this.parse();
  }

  private parse() {
    Object.keys(this.query).forEach((e: string) => {
      this.query.raw = this.query.raw.replace(`$${e}`, this.query[e] ? this.query[e] : '');
    });
    return this.query.raw;
  }

  private getColumnValue(name: string) {
    if(typeof this.payload[name] === 'string') {
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