import { autoInjectable } from 'tsyringe';
import { NOT_NULL, PRIMARY_KEY, SERIAL } from '../constants';
import { IColumnOptionsArgs, IColumnOptionsResolver } from '../interfaces';

@autoInjectable()
export class ColumnOptionsResolver implements IColumnOptionsResolver {
  resolve(opt: string, arg: IColumnOptionsArgs) {
    return this[opt](arg);
  }
  
  type(arg: (() => string) | string) {
    if(typeof arg === 'function') {
      return arg();
    }
    return arg;
  }

  autoIncrement(arg?: boolean) {
    if(arg) {
      return SERIAL;
    }
    return '';
  }

  nullable(arg?: boolean) {
    if(arg) {
      return '';
    }
    return NOT_NULL;
  }

  primaryKey(arg?: boolean) {
    if(arg) {
      return PRIMARY_KEY;
    }
    return '';
  }
}