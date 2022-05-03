export const PrimaryKey = (): PropertyDecorator => {

  return (target, propertyKey: PropertyKey): void => {
    Reflect.defineMetadata('primaryKey', propertyKey, target);
    return Reflect.getMetadata(propertyKey, target);
  };
};