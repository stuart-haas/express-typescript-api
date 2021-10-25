import App from 'boot/app';
import { NextFunction, Request, Response } from 'express';
import { container, autoInjectable, singleton } from 'tsyringe';
import { RouteInterface } from '@interfaces/RouteInterface';
import { ControllerProvider } from './ControllerProvider';
import { MiddlewareInterface } from '@app/interfaces/MiddlewareInterface';

@singleton()
@autoInjectable()
export class RouteProvider {

  private root = '/api';

  constructor(
    private app: App, 
    private controllerProvider: ControllerProvider
  ) {
    this.controllerProvider.controllers.forEach(controller => {
      const instance = container.resolve(controller);
      const prefix = Reflect.getMetadata('prefix', controller);
      const routes: Array<RouteInterface> = Reflect.getMetadata('routes', controller);
      const middleware: Array<MiddlewareInterface> = Reflect.getMetadata('middleware', controller) || ((req: Request, res: Response, next: NextFunction) => next());
      routes.forEach(route => {
        this.app.instance[route.requestMethod](this.root + prefix + route.path, middleware, (req: Request, res: Response) => {
          instance[route.methodName](req, res);
        });
      });
    });
  }
}