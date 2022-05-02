import { container } from 'tsyringe';
import { Database } from '../Database';
import { checkNullable, checkPrimaryKey } from './options';

interface ColumnOptions {
  type: string;
  nullable?: boolean;
  primaryKey?: boolean;
}

interface Column {
  [name: string]: ColumnOptions;
}

const database = container.resolve(Database) as Database;

export function createTable (tableName: string, columns: Column[]) {
  const cols = mapColumns(columns);
  const query = `CREATE TABLE IF NOT EXISTS ${tableName} (${cols})`;
  console.log(query);
}

export function mapColumns(columns: Column[]) {
  const cols = columns.map((col: Column) => {
    const name = Object.keys(col)[0];
    const options = Object.values(col)[0];
    const parsedOptions = parseColumnOptions(options);
    const colString = `${name} ${parsedOptions}`;
    return colString;
  }).join(',');
  return cols;
}

export function parseColumnOptions(options: ColumnOptions) {
  const opts = [];
  if(Object.prototype.hasOwnProperty.call(options, 'type')) {
    opts.push(options.type);
  }
  if(Object.prototype.hasOwnProperty.call(options, 'nullable')) {
    opts.push(checkNullable(options.nullable));
  }
  if(Object.prototype.hasOwnProperty.call(options, 'primaryKey')) {
    opts.push(checkPrimaryKey(options.primaryKey));
  }
  return opts.join(' ');
}
