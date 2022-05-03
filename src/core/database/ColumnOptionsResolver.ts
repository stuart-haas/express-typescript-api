import { autoInjectable } from 'tsyringe';
  
export interface IColumnOptionsResolver {
    resolve: (opt: string, arg: any) => string;
    type: (arg: string) => string;
    nullable: (arg: boolean) => string;
    primaryKey: (arg: boolean) => string;
    autoIncrement: (arg: boolean) => string;
  }

  @autoInjectable()
export class ColumnOptionsResolver implements IColumnOptionsResolver {
  resolve(opt: string, arg: any) {
    return this[opt](arg);
  }
  
  type(arg: string) {
    return arg;
  }

  autoIncrement(arg?: boolean) {
    if(arg) {
      return 'SERIAL';
    }
    return '';
  }

  nullable(arg?: boolean) {
    if(arg) {
      return '';
    }
    return 'NOT NULL';
  }

  primaryKey(arg?: boolean) {
    if(arg) {
      return 'PRIMARY KEY';
    }
    return '';
  }
}