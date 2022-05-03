import { container } from 'tsyringe';
import { QueryBuilder } from '../abstracts/QueryBuilder';
import { CREATE_TABLE, IF_NOT_EXISTS } from '../constants';
import { IQueryBuilder } from '../interfaces';
import { TableMapper } from '../mappers/TableMapper';
import { Column } from '../types';

export class CreateTable extends QueryBuilder implements IQueryBuilder {

  tableMapper: TableMapper;

  constructor(table: string) {
    super(table);
    this.query.raw = `${CREATE_TABLE} $ifNotExists ${this.table} ($columns)`;
    this.tableMapper = container.resolve(TableMapper);
  }

  ifNotExists(): CreateTable {
    this.query.ifNotExists = IF_NOT_EXISTS;
    return this;
  }

  columns(columns: Column[]): CreateTable {
    this.query.columns = this.tableMapper.mapColumns(columns);
    return this;
  }
}