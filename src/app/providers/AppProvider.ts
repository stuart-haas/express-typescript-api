import { IProvider } from 'interfaces/IProvider';
import { Application } from 'start/Application';
import { autoInjectable, singleton } from 'tsyringe';

@singleton()
@autoInjectable()
export class AppProvider implements IProvider {

  constructor(private app: Application) {}

  start(): void {
    this.app.start();
  }
}