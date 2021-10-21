import App from '@bootstrap/app';
import { autoInjectable } from 'tsyringe';

@autoInjectable()
export class BootProvider {

  constructor(private app: App) {
    this.app.start();
  }
}