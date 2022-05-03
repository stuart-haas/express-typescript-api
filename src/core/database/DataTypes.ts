export class DataTypes {

  static STRING(length: number = 255) {
    return `VARCHAR(${length})`;
  }
  
  static TEXT () {
    return 'TEXT';
  }
  
  static INTEGER () {
    return 'INTEGER';
  }
}
