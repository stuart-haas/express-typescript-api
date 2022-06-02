import { InjectionToken, singleton } from 'tsyringe';
import { IProvider, IContainer } from 'core/interfaces';
import { Container as AppContainer } from 'core/providers';
import { MiddlewareProvider, ApiRouteProvider, ApplicationProvider, ErrorProvider, DataProvider } from 'app/providers';

@singleton()
export class Container extends AppContainer implements IContainer {

  providers: InjectionToken<IProvider>[] = [
    DataProvider,
    MiddlewareProvider,
    ApiRouteProvider,
    ErrorProvider,
    ApplicationProvider,
  ];
}