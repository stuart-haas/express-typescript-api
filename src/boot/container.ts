import { container, singleton } from 'tsyringe';
import { MiddlewareProvider } from '@providers/MiddlewareProvider';
import { ApiRouteProvider } from '@providers/ApiRouteProvider';
import { AppProvider } from '@providers/AppProvider';
import { ProviderInterface } from '@interfaces/ProviderInterface';

@singleton()
export class Container {

  public providers;

  constructor() {
    this.providers = [
      MiddlewareProvider,
      ApiRouteProvider,
      AppProvider
    ];
  }

  public boot() {
    this.providers.forEach(provider => {
      const instance = container.resolve(provider) as ProviderInterface;
      instance.boot();
    })
  }
}