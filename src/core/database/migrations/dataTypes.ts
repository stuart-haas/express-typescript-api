function StringDto (length?: number) {
  if(length) {
    return `VARCHAR(${length})`;
  }
  return 'VARCHAR(255)';
}

function TextDto () {
  return 'TEXT';
}

function IntegerDto () {
  return 'INTEGER';
}

export const STRING = (length?: number) => StringDto(length);
export const TEXT = () => TextDto();
export const INTEGER = () => IntegerDto();

