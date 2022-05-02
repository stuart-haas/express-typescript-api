import { Application } from 'start/Application';
import { autoInjectable, singleton } from 'tsyringe';
import { IProvider } from 'core/interfaces/IProvider';
import { Error } from 'middleware/Error';

@singleton()
@autoInjectable()
export class ErrorProvider implements IProvider {

  constructor(private app: Application) {}

  start(): void {
    this.app.server.use(Error);
  }
}