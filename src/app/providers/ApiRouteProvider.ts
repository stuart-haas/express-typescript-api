import { App } from 'boot/app';
import { autoInjectable, InjectionToken, singleton } from 'tsyringe';
import { RouteProviderInterface } from 'interfaces/RouteProviderInterface';
import { RouteProvider } from 'common/RouteProvider';
import { UserController } from 'components/User/UserController';
import { IndexController } from 'components/Index/IndexController';
import { ControllerInterface } from 'interfaces/ControllerInterface';

@singleton()
@autoInjectable()
export class ApiRouteProvider extends RouteProvider implements RouteProviderInterface {

  root = '/api';

  controllers: InjectionToken<ControllerInterface>[] = [
    IndexController,
    UserController
  ];

  constructor(protected app: App) {
    super(app);
  }
}