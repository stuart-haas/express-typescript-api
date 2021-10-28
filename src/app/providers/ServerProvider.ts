import { ProviderInterface } from 'interfaces/ProviderInterface';
import { Server } from 'boot/server';
import { autoInjectable, singleton } from 'tsyringe';
import { createConnection } from 'typeorm';

@singleton()
@autoInjectable()
export class ServerProvider implements ProviderInterface {

  constructor(private server: Server) {}

  boot(): void {
    createConnection()
      .then(async () => {
        this.server.start();
      })
      .catch(error => console.log(error));
  }
}