import { InjectionToken, singleton } from 'tsyringe';
import { MiddlewareProvider } from '@providers/MiddlewareProvider';
import { ApiRouteProvider } from '@providers/ApiRouteProvider';
import { AppProvider } from '@providers/AppProvider';
import { ProviderInterface } from '@interfaces/ProviderInterface';
import { ContainerInterface } from '@interfaces/ContainerInterface';
import { BaseContainer } from '@common/BaseContainer';

@singleton()
export class Container extends BaseContainer implements ContainerInterface {

  providers: InjectionToken<ProviderInterface>[] = [
    MiddlewareProvider,
    ApiRouteProvider,
    AppProvider
  ];
}