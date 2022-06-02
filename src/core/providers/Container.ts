import { container, InjectionToken } from 'tsyringe';
import { IProvider, IContainer } from 'core/interfaces';

export abstract class Container implements IContainer {

  providers: InjectionToken<IProvider>[];

  start(): void {
    this.providers.forEach(provider => {
      const instance = container.resolve(provider);
      instance.start();
    });
  }
}