import { MiddlewareInterface } from '@interfaces/MiddlewareInterface';

export const Controller = (prefix = '', middleware?: MiddlewareInterface | Array<MiddlewareInterface>): ClassDecorator => {
  return (target): void => {
    Reflect.defineMetadata('prefix', prefix, target);

    if (!Reflect.hasMetadata('routes', target)) {
      Reflect.defineMetadata('routes', [], target);
    }

    if (!Reflect.hasMetadata('middleware', target)) {
      Reflect.defineMetadata('middleware', [], target);
    }

    if(middleware) {
      let middlewares = Reflect.getMetadata('middleware', target) as Array<MiddlewareInterface>;

      if(Array.isArray(middleware)) {
        middlewares = [...middleware];
      } else {
        middlewares.push(middleware);
      }

      Reflect.defineMetadata('middleware', middlewares, target);
    }
  };
};