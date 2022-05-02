import { Application } from 'start/Application';
import { NextFunction, Request, Response } from 'express';
import { container, InjectionToken } from 'tsyringe';
import { IRoute } from 'interfaces/IRoute';
import { IMiddleware } from 'interfaces/IMiddleware';
import { IRouteProvider } from 'interfaces/IRouteProvider';
import { IController } from 'interfaces/IController';

export abstract class RouteProvider implements IRouteProvider {

  constructor(protected app: Application) {}

  root: string;

  controllers: InjectionToken<IController>[];

  start(): void {
    this.controllers.forEach(controller => {
      const instance = container.resolve(controller);
      const prefix = Reflect.getMetadata('prefix', controller);
      const routes: Array<IRoute> = Reflect.getMetadata('routes', controller);
      const middleware: Array<IMiddleware> = Reflect.getMetadata('middleware', controller) || ((req: Request, res: Response, next: NextFunction) => next());
      routes.forEach(route => {
        this.app.server[route.requestMethod](this.root + prefix + route.path, middleware, (req: Request, res: Response, next: NextFunction) => {
          instance[route.methodName](req, res, next);
        });
      });
    });
  }
}