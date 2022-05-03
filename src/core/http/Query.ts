import { Request } from 'express';

export const defineQuery = (target, propertyKey: string, req: Request, newArgs: any[]) => {
  if (Reflect.hasOwnMetadata('query', target.constructor, propertyKey)) {
    if (req.query) {
      const query = Reflect.getOwnMetadata('query', target.constructor, propertyKey);
      const { parameterIndex } = query;
      newArgs.splice(parameterIndex, 0, req.query);
    }
  }
};

export const Query = (): ParameterDecorator => {
  return (target, propertyKey: string, parameterIndex: number) => {
    Reflect.defineMetadata('query', { parameterIndex }, target.constructor, propertyKey);
  };
};