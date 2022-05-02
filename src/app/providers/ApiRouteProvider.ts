import { Application } from 'start/Application';
import { autoInjectable, InjectionToken, singleton } from 'tsyringe';
import { IRouteProvider } from 'interfaces/IRouteProvider';
import { RouteProvider } from 'core/RouteProvider';
import { UserController } from 'components/User/UserController';
import { IndexController } from 'components/Index/IndexController';
import { IController } from 'interfaces/IController';

@singleton()
@autoInjectable()
export class ApiRouteProvider extends RouteProvider implements IRouteProvider {

  root = '/api';

  controllers: InjectionToken<IController>[] = [
    IndexController,
    UserController
  ];

  constructor(protected app: Application) {
    super(app);
  }
}