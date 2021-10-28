import { RouteInterface } from 'interfaces/RouteInterface';
import { defineBody } from './Body';
import { defineParam } from './Param';

export const Route = (requestMethod: string) => (path: string): MethodDecorator => {
  return (target, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor | void => {
    if (!Reflect.hasMetadata('routes', target.constructor)) {
      Reflect.defineMetadata('routes', [], target.constructor);
    }

    const routes = Reflect.getMetadata('routes', target.constructor) as Array<RouteInterface>;

    routes.push({
      requestMethod,
      path,
      methodName: propertyKey
    });

    Reflect.defineMetadata('routes', routes, target.constructor);

    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      const req = args[0];

      const newArgs = [...args];

      defineParam(target, propertyKey, req, newArgs);

      defineBody(target, propertyKey, req, newArgs);

      return await originalMethod.apply(this, newArgs);
    };

    return descriptor;
  };
};

export const Get = Route('get');

export const Post = Route('post');

export const Put = Route('put');

export const Patch = Route('patch');

export const Delete = Route('delete');

export const Options = Route('options');