import { autoInjectable, singleton } from 'tsyringe';
import { IProvider } from 'core/interfaces';
import { Application } from 'start';

@singleton()
@autoInjectable()
export class ApplicationProvider implements IProvider {

  constructor(private app: Application) {}

  start(): void {
    this.app.start();
  }
}