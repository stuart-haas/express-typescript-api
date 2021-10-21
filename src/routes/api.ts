import { container } from 'tsyringe';
import { RouteInterface } from '@interfaces/RouteInterface';
import { UserController } from '@components/User/UserController';
import { Request, Response } from 'express';

export const applyRoutes = (app) => {
  [UserController].forEach(controller => {
    const instance = container.resolve(controller);
    const prefix = Reflect.getMetadata('prefix', controller);
    const routes: Array<RouteInterface> = Reflect.getMetadata('routes', controller);
    routes.forEach(route => {
      app[route.requestMethod](prefix + route.path, (req: Request, res: Response) => {
        instance[route.methodName](req, res);
      });
    });
  });
}