import { ControllerInterface } from '@interfaces/ControllerInterface';
import { defineMiddleware } from './Middleware';

export const Controller = (controller: ControllerInterface): ClassDecorator => {
  return (target): void => {
    Reflect.defineMetadata('prefix', controller.prefix, target);

    if (!Reflect.hasMetadata('routes', target)) {
      Reflect.defineMetadata('routes', [], target);
    }

    defineMiddleware(target, controller.middleware);
  };
};