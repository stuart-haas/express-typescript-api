export class DataTypes {

  static STRING(length = 255) {
    return `VARCHAR(${length})`;
  }
  
  static TEXT () {
    return 'TEXT';
  }
  
  static INTEGER () {
    return 'INTEGER';
  }
}
