import { Request } from 'express';

export const defineBody = (target, propertyKey: string, req: Request, newArgs: any[]) => {
  if (Reflect.hasOwnMetadata('body', target.constructor, propertyKey)) {
    if (req.body) {
      const body = Reflect.getOwnMetadata('body', target.constructor, propertyKey);
      const { parameterIndex } = body;
      newArgs.splice(parameterIndex, 0, req.body);
    }
  }
};

export const Body = (): ParameterDecorator => {
  return (target, propertyKey: string, parameterIndex: number) => {
    Reflect.defineMetadata('body', { parameterIndex }, target.constructor, propertyKey);
  };
};