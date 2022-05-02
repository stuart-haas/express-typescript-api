import { IProvider } from 'core/interfaces/IProvider';
import { Application } from 'start/Application';
import { autoInjectable, singleton } from 'tsyringe';

@singleton()
@autoInjectable()
export class ApplicationProvider implements IProvider {

  constructor(private app: Application) {}

  start(): void {
    this.app.start();
  }
}