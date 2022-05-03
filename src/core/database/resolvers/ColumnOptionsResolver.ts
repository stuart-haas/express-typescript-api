import { autoInjectable } from 'tsyringe';
import { IColumnOptionsResolver } from '../interfaces';

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