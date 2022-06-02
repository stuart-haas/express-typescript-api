import { IMiddleware } from 'core/interfaces';

export const defineMiddleware = (target, middleware: IMiddleware | Array<IMiddleware>) => {
  if (!Reflect.hasMetadata('middleware', target)) {
    Reflect.defineMetadata('middleware', [], target);
  }

  if(middleware) {
    let middlewares = Reflect.getMetadata('middleware', target) as Array<IMiddleware>;

    if(Array.isArray(middleware)) {
      middlewares = [...middleware];
    } else {
      middlewares.push(middleware);
    }

    Reflect.defineMetadata('middleware', middlewares, target);
  }
};

export const ControllerMiddleware = (middleware: IMiddleware | Array<IMiddleware>): ClassDecorator => {
  return (target): void => {
    defineMiddleware(target, middleware);
  };
};

export const RouteMiddleware = (middleware: IMiddleware | Array<IMiddleware>): MethodDecorator => {
  return (target): void => {
    defineMiddleware(target.constructor, middleware);
  };
};