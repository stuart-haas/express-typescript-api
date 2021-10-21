import { container, singleton } from 'tsyringe';
import { MiddlewareProvider } from '@providers/MiddlewareProvider';
import { RouteProvider } from '@providers/RouteProvider';
import { AppProvider } from '@providers/AppProvider';

@singleton()
export class Container {

  public boot() {
    container.resolve(MiddlewareProvider);
    container.resolve(RouteProvider);
    container.resolve(AppProvider);
  }
}