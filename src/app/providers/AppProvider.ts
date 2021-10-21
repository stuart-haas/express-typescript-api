import App from '@boot/app';
import { autoInjectable, singleton } from 'tsyringe';
import { createConnection } from 'typeorm';

@singleton()
@autoInjectable()
export class AppProvider {

  constructor(private app: App) {
    createConnection()
      .then(async () => {
        this.app.start();
      })
      .catch(error => console.log(error));
  }
}