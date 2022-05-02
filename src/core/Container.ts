import { container, InjectionToken } from 'tsyringe';
import { IProvider } from 'core/interfaces/IProvider';
import { IContainer } from 'core/interfaces/IContainer';

export abstract class Container implements IContainer {

  providers: InjectionToken<IProvider>[];

  start(): void {
    this.providers.forEach(provider => {
      const instance = container.resolve(provider) as IProvider;
      instance.start();
    });
  }
}