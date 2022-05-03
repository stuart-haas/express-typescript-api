export type ColumnOptions = {
  type: (() => string) | string;
  nullable?: boolean;
  primaryKey?: boolean;
  autoIncrement?: boolean;
}

export type Column = {
  [name: string]: ColumnOptions;
}