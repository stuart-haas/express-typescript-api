import { App } from 'boot/app';
import { autoInjectable, singleton } from 'tsyringe';
import { ProviderInterface } from 'interfaces/ProviderInterface';
import { Error } from 'app/middleware/Error';

@singleton()
@autoInjectable()
export class ErrorProvider implements ProviderInterface {

  constructor(private app: App) {}

  boot(): void {
    this.app.server.use(Error);
  }
}