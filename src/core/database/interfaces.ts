export interface IColumnOptionsArgs {
  arg: (() => string) | string | boolean | number
}

export interface IColumnOptionsResolver {
  resolve: (opt: string, arg: IColumnOptionsArgs) => string;
  type: (arg: (() => string) | string) => string;
  nullable: (arg: boolean) => string;
  primaryKey: (arg: boolean) => string;
  autoIncrement: (arg: boolean) => string;
}

export interface IMigration {
  up: () => void;
  down: () => void;
}

export interface IQueryBuilder {
  build: () => string;
}