import { MiddlewareInterface } from '@interfaces/MiddlewareInterface';

export const defineMiddleware = (target, middleware: MiddlewareInterface | Array<MiddlewareInterface>) => {
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
}

export const ControllerMiddleware = (middleware: MiddlewareInterface | Array<MiddlewareInterface>): ClassDecorator => {
  return (target): void => {
    defineMiddleware(target, middleware);
  }
};

export const RouteMiddleware = (middleware: MiddlewareInterface | Array<MiddlewareInterface>): MethodDecorator => {
  return (target): void => {
    defineMiddleware(target.constructor, middleware);
  }
};