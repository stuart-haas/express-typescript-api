import { ProviderInterface } from '@interfaces/ProviderInterface';
import App from '@boot/app';
import { autoInjectable, singleton } from 'tsyringe';
import { createConnection } from 'typeorm';

@singleton()
@autoInjectable()
export class AppProvider implements ProviderInterface {

  constructor(private app: App) {}

  boot(): void {
    createConnection()
      .then(async () => {
        this.app.start();
      })
      .catch(error => console.log(error));
  }
}