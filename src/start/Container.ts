import { InjectionToken, singleton } from 'tsyringe';
import { MiddlewareProvider } from 'providers/MiddlewareProvider';
import { ApiRouteProvider } from 'providers/ApiRouteProvider';
import { ApplicationProvider } from 'providers/ApplicationProvider';
import { IProvider } from 'core/interfaces/IProvider';
import { IContainer } from 'core/interfaces/IContainer';
import { Container as AppContainer } from 'core/Container';
import { ErrorProvider } from 'providers/ErrorProvider';
import { DataProvider } from 'app/providers/DataProvider';

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