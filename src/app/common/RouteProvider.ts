import { App } from 'boot/app';
import { NextFunction, Request, Response } from 'express';
import { container, InjectionToken } from 'tsyringe';
import { RouteInterface } from 'interfaces/RouteInterface';
import { MiddlewareInterface } from 'interfaces/MiddlewareInterface';
import { RouteProviderInterface } from 'interfaces/RouteProviderInterface';
import { BaseControllerInterface } from 'interfaces/BaseControllerInterface';

export abstract class RouteProvider implements RouteProviderInterface {

  constructor(protected app: App) {}

  root: string;

  controllers: InjectionToken<BaseControllerInterface>[];

  boot(): void {
    this.controllers.forEach(controller => {
      const instance = container.resolve(controller);
      const prefix = Reflect.getMetadata('prefix', controller);
      const routes: Array<RouteInterface> = Reflect.getMetadata('routes', controller);
      const middleware: Array<MiddlewareInterface> = Reflect.getMetadata('middleware', controller) || ((req: Request, res: Response, next: NextFunction) => next());
      routes.forEach(route => {
        this.app.instance[route.requestMethod](this.root + prefix + route.path, middleware, (req: Request, res: Response, next: NextFunction) => {
          instance[route.methodName](req, res, next);
        });
      });
    });
  }
}