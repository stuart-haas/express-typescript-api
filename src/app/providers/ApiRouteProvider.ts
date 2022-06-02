import { Application } from 'start';
import { autoInjectable, InjectionToken, singleton } from 'tsyringe';
import { IRouteProvider, IController } from 'core/interfaces';
import { RouteProvider } from 'core/providers';
import { UserController } from 'components/User/UserController';
import { IndexController } from 'components/Index/IndexController';

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