import { MiddlewareInterface } from '@interfaces/MiddlewareInterface';

export const Middleware = (middleware: MiddlewareInterface | Array<MiddlewareInterface>): MethodDecorator => {
  return (target): void => {
    if (!Reflect.hasMetadata('middleware', target.constructor)) {
      Reflect.defineMetadata('middleware', [], target.constructor);
    }

    let middlewares = Reflect.getMetadata('middleware', target.constructor) as Array<MiddlewareInterface>;

    if(Array.isArray(middleware)) {
      middlewares = [...middleware];
    } else {
      middlewares.push(middleware);
    }

    Reflect.defineMetadata('middleware', middlewares, target.constructor);
  }
};