import App from '@boot/app';
import { autoInjectable } from 'tsyringe';

@autoInjectable()
export class AppProvider {

  constructor(private app: App) {
    this.app.start();
  }
}