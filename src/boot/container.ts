import { InjectionToken, singleton } from 'tsyringe';
import { MiddlewareProvider } from 'providers/MiddlewareProvider';
import { ApiRouteProvider } from 'providers/ApiRouteProvider';
import { ServerProvider } from 'providers/ServerProvider';
import { ProviderInterface } from 'interfaces/ProviderInterface';
import { ContainerInterface } from 'interfaces/ContainerInterface';
import { Container } from 'common/Container';

@singleton()
export class AppContainer extends Container implements ContainerInterface {

  providers: InjectionToken<ProviderInterface>[] = [
    MiddlewareProvider,
    ApiRouteProvider,
    ServerProvider
  ];
}