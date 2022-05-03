import { INTEGER, TEXT, VARCHAR, VARCHAR_LENGTH } from './constants';

export class DataTypes {

  static VARCHAR(length?: number) {
    if(!length) {
      return `${VARCHAR}(${VARCHAR_LENGTH})`;
    }
    return `${VARCHAR}(${length})`;
  }
  
  static TEXT () {
    return TEXT;
  }
  
  static INTEGER () {
    return INTEGER;
  }
}
