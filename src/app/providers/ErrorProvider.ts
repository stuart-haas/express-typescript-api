import { autoInjectable, singleton } from 'tsyringe';
import { Application } from 'start';
import { IProvider } from 'core/interfaces';
import { Error } from 'app/middleware';

@singleton()
@autoInjectable()
export class ErrorProvider implements IProvider {

  constructor(private app: Application) {}

  start(): void {
    this.app.server.use(Error);
  }
}