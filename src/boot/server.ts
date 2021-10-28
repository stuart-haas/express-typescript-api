import { ServerInterface } from 'app/interfaces/ServerInterface';
import express from 'express';
import { singleton } from 'tsyringe';

@singleton()
export class Server implements ServerInterface {
  
  app: express.Application;

  constructor() {
    this.app = express();
  }

  public start(): void {
    this.app.listen(process.env.PORT, () => {
      console.log(
        `Application is up and running on port ${process.env.PORT}`
      );
    });
  }
}