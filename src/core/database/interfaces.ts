export interface IColumnOptionsResolver {
  resolve: (opt: string, arg: any) => string;
  type: (arg: string) => string;
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