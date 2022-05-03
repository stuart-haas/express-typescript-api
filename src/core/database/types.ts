export interface ColumnOptions {
  type: string;
  nullable?: boolean;
  primaryKey?: boolean;
  autoIncrement?: boolean;
}

export interface Column {
  [name: string]: ColumnOptions;
}