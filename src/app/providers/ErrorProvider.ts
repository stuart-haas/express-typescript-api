import { Server } from 'boot/server';
import { autoInjectable, singleton } from 'tsyringe';
import { ProviderInterface } from 'interfaces/ProviderInterface';
import { Error } from 'app/middleware/Error';

@singleton()
@autoInjectable()
export class ErrorProvider implements ProviderInterface {

  constructor(private server: Server) {}

  boot(): void {
    this.server.app.use(Error);    
  }
}