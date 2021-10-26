import { container, InjectionToken } from 'tsyringe';
import { ProviderInterface } from '@interfaces/ProviderInterface';
import { ContainerInterface } from '@interfaces/ContainerInterface';

export abstract class BaseContainer implements ContainerInterface {

  providers: InjectionToken<ProviderInterface>[];

  public boot() {
    this.providers.forEach(provider => {
      const instance = container.resolve(provider) as ProviderInterface;
      instance.boot();
    })
  }
}