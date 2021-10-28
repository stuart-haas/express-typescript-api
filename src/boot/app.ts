import { AppInterface } from 'app/interfaces/AppInterface';
import express from 'express';
import { singleton } from 'tsyringe';

@singleton()
export class App implements AppInterface {
  
  server: express.Application;

  constructor() {
    this.server = express();
  }

  start(): void {
    this.server.listen(process.env.PORT, () => {
      console.log(
        `Application is up and running on port ${process.env.PORT}`
      );
    });
  }
}