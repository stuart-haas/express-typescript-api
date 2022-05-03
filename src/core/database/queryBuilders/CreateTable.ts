import { container } from 'tsyringe';
import { QueryBuilder } from '../abstracts/QueryBuilder';
import { CREATE_TABLE, IF_NOT_EXISTS } from '../constants';
import { IQueryBuilder } from '../interfaces';
import { ColumnMapper } from '../mappers/ColumnMapper';
import { Column } from '../types';

export class CreateTable extends QueryBuilder implements IQueryBuilder {

  constructor(name: string) {
    super();
    this.name = name;
  }

  ifNotExists(): CreateTable {
    this.options += IF_NOT_EXISTS;
    return this;
  }

  columns(columns: Column[]): CreateTable {
    const columnMapper = container.resolve(ColumnMapper) as ColumnMapper;
    this.cols = columnMapper.mapColumns(columns);
    return this;
  }

  build(): string {
    return `${CREATE_TABLE} ${this.options} ${this.name} (${this.cols})`;
  }
}