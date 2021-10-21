import App from '@bootstrap/app';
import { Request, Response } from 'express';
import { container, autoInjectable } from 'tsyringe';
import { RouteInterface } from '@app/interfaces/RouteInterface';
import { ControllerProvider } from './ControllerProvider';

@autoInjectable()
export class RouteProvider {

  constructor(private app: App, private controllerProvider: ControllerProvider) {
    this.controllerProvider.controllers.forEach(controller => {
      const instance = container.resolve(controller);
      const prefix = Reflect.getMetadata('prefix', controller);
      const routes: Array<RouteInterface> = Reflect.getMetadata('routes', controller);
      routes.forEach(route => {
        this.app.instance[route.requestMethod](prefix + route.path, (req: Request, res: Response) => {
          instance[route.methodName](req, res);
        });
      });
    });
  }
}