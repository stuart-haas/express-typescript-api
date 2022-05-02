import { InjectionToken, singleton } from 'tsyringe';
import { MiddlewareProvider } from 'providers/MiddlewareProvider';
import { ApiRouteProvider } from 'providers/ApiRouteProvider';
import { AppProvider } from 'providers/AppProvider';
import { IProvider } from 'interfaces/IProvider';
import { IContainer } from 'interfaces/IContainer';
import { Container as AppContainer } from 'core/Container';
import { ErrorProvider } from 'app/providers/ErrorProvider';

@singleton()
export class Container extends AppContainer implements IContainer {

  providers: InjectionToken<IProvider>[] = [
    MiddlewareProvider,
    ApiRouteProvider,
    ErrorProvider,
    AppProvider,
  ];
}