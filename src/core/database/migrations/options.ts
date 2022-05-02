export function checkNullable (nullable?: boolean) {
  if(nullable) {
    return '';
  }
  return 'NOT NULL';
}

export function checkPrimaryKey (primaryKey?: boolean) {
  if(primaryKey) {
    return 'PRIMARY KEY';
  }
  return '';
}