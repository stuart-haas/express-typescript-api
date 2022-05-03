import { container } from 'tsyringe';
import { QueryBuilder } from '../abstracts/QueryBuilder';
import { CREATE_TABLE, IF_NOT_EXISTS } from '../constants';
import { IQueryBuilder } from '../interfaces';
import { ColumnMapper } from '../mappers/ColumnMapper';
import { Column } from '../types';

export class CreateTable extends QueryBuilder implements IQueryBuilder {

  constructor(table: string) {
    super(table);
    this.rawQuery = `${CREATE_TABLE} $${Symbol(this.query.ifNotExists).toString()} ${this.table} ($columns)`;
  }

  ifNotExists(): CreateTable {
    this.query.ifNotExists = IF_NOT_EXISTS;
    return this;
  }

  columns(columns: Column[]): CreateTable {
    const columnMapper = container.resolve(ColumnMapper) as ColumnMapper;
    this.query.columns = columnMapper.mapColumns(columns);
    return this;
  }

  build(): string {
    return super.build();
  }
}