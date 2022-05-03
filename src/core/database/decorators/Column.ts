import { IColumn } from '../interfaces';

export const Column = (type: ((() => string) | string)): PropertyDecorator => {

  return (target, propertyKey: PropertyKey): void => {
    if (!Reflect.hasMetadata('columns', target)) {
      Reflect.defineMetadata('columns', [], target);
    }

    const columns = Reflect.getMetadata('columns', target) as Array<IColumn>;

    columns.push({
      type: typeof type === 'function' ? type() : type,
      name: propertyKey
    });

    Reflect.defineMetadata('columns', columns, target);

    return Reflect.getMetadata(columns, target);
  };
};