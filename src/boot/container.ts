import { InjectionToken, singleton } from 'tsyringe';
import { MiddlewareProvider } from 'providers/MiddlewareProvider';
import { ApiRouteProvider } from 'providers/ApiRouteProvider';
import { ServerProvider } from 'providers/ServerProvider';
import { ProviderInterface } from 'interfaces/ProviderInterface';
import { ContainerInterface } from 'interfaces/ContainerInterface';
import { Container as BaseContainer } from 'common/Container';
import { ErrorProvider } from 'app/providers/ErrorProvider';

@singleton()
export class Container extends BaseContainer implements ContainerInterface {

  providers: InjectionToken<ProviderInterface>[] = [
    MiddlewareProvider,
    ApiRouteProvider,
    ErrorProvider,
    ServerProvider,
  ];
}