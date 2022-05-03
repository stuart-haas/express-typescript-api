import { ALL, EQUAL, Id, RETURNING, TEXT, VARCHAR, WHERE } from '../constants';
import { IColumn, Query } from '../interfaces';
import { Model } from '../Model';

export abstract class QueryBuilder {
  protected table: string;
  protected params: string;
  protected values = [];
  protected query: Query = {
    columns: ALL,
    raw: '',
    where: '',
    returning: '',
    ifNotExists: '',
    ifExists: ''
  };

  constructor(table?: string) {
    this.table = table;
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
      this.query.raw = this.query.raw.replace(`$${e}`, this.query[e]);
    });
    return this.query.raw;
  }

  static mapColumns(model: Model, columns?: string[]) {
    const cols = QueryBuilder.getColumns(model);
    return cols.map((a: IColumn) => {
      const col = columns && columns.find((b: string) => a.name === b);
      if(col) return col;
      return null;
    }).filter((e: string) => e !== null);
  }

  static mapInsertParams(payload: Model) {
    const values = Object.values(payload);
    const params = values.map((e: string | number, i: number) => `$${i + 1}`).join(', ');
    return { values, params };
  }

  static mapUpdateParams(payload: Model, columns: IColumn[]) {
    const values = Object.values(payload);
    const keys = Object.keys(payload);
    const params = keys.map((e: string) => `${e} = ${QueryBuilder.getColumnValue(e, payload, columns)}`).join(', ');
    return { values, params };
  }

  static getColumns(model: Model) {
    return Reflect.getMetadata('columns', model);
  }

  static getPrimaryKey(model: Model): string {
    return Reflect.getMetadata('primaryKey', model) || Id;
  }

  private static getColumnValue(name: string, payload: Model, columns: IColumn[]) {
    const col = columns.find((e: IColumn) => {
      return e.name === name;
    });
    // TODO: Add value mapper class based on data type
    if(col.type.includes(VARCHAR) || col.type.includes(TEXT)) {
      return `'${payload[name]}'`;
    }
    return payload[name];
  }

  get payload() {
    return this.values;
  }
}