import { container, InjectionToken } from 'tsyringe';
import { IProvider } from 'interfaces/IProvider';
import { IContainer } from 'interfaces/IContainer';

export abstract class Container implements IContainer {

  providers: InjectionToken<IProvider>[];

  start(): void {
    this.providers.forEach(provider => {
      const instance = container.resolve(provider) as IProvider;
      instance.start();
    });
  }
}