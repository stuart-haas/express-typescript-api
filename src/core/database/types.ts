export type ColumnOptions = {
  type: string;
  nullable?: boolean;
  primaryKey?: boolean;
  autoIncrement?: boolean;
}

export type Column = {
  [name: string]: ColumnOptions;
}