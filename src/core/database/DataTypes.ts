import { INTEGER, TEXT, VARCHAR } from './constants';

export class DataTypes {

  static VARCHAR(length = 255) {
    return `${VARCHAR}(${length})`;
  }
  
  static TEXT () {
    return TEXT;
  }
  
  static INTEGER () {
    return INTEGER;
  }
}
