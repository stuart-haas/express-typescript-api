import { InjectionToken, singleton } from 'tsyringe';
import { MiddlewareProvider } from 'providers/MiddlewareProvider';
import { ApiRouteProvider } from 'providers/ApiRouteProvider';
import { AppProvider } from 'providers/AppProvider';
import { ProviderInterface } from 'interfaces/ProviderInterface';
import { ContainerInterface } from 'interfaces/ContainerInterface';
import { Container } from 'common/Container';
import { ErrorProvider } from 'app/providers/ErrorProvider';

@singleton()
export class AppContainer extends Container implements ContainerInterface {

  providers: InjectionToken<ProviderInterface>[] = [
    MiddlewareProvider,
    ApiRouteProvider,
    ErrorProvider,
    AppProvider,
  ];
}