import { Request } from 'express';

export const defineParam = (target, propertyKey: string, req: Request, newArgs: any[]) => {
  if (Reflect.hasOwnMetadata('param', target.constructor, propertyKey)) {
    if(Object.keys(req.params).length) {
      const param = Reflect.getOwnMetadata('param', target.constructor, propertyKey);
      const { key, parameterIndex } = param;
      newArgs.splice(parameterIndex, 0, req.params[key]);
    }
  }      
}

export const Param = (key: string): ParameterDecorator => {
  return (target, propertyKey: string, parameterIndex: number) => {
    Reflect.defineMetadata('param', { key, parameterIndex }, target.constructor, propertyKey);
  }
}