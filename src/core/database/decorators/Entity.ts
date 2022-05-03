export const Entity = (table: string): ClassDecorator => {
  return (target): void => {
    target.prototype.table = table;
  };
};