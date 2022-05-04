import { container } from 'tsyringe';
import { ALL, AND, EQUAL, RETURNING, WHERE } from '../constants';
import { IQuery } from '../interfaces';
import { TableMapper } from '../mappers/TableMapper';
import { Model } from '../Model';

export abstract class QueryBuilder {

  protected tableMapper: TableMapper;
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
    this.tableMapper = container.resolve(TableMapper);
  }

  where(search?: any) {
    const params = search && Object.keys(search).map((e => `${e} ${EQUAL} ${search[e]}`)).join(` ${AND} `);
    this.query.where = params ? `${WHERE} ${params}` : '';
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
    return this.query.raw.replace(/{\w+}/g, placeholder =>
      this.query[placeholder.substring(1, placeholder.length - 1)] || ''
    );
  }

  get values() {
    return Object.values(this.payload);
  }

  protected get insertParams() {
    return this.values.map((e: string | number, i: number) => `$${i + 1}`).join(', ');
  }

  protected get updateParams() {
    return Object.keys(this.payload).map((e: string) => `${e} = ${this.tableMapper.getColumnValue(this.payload, e)}`).join(', ');
  }
}