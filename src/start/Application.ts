import { IApplication } from 'interfaces/IApplication';
import express from 'express';
import { singleton } from 'tsyringe';

@singleton()
export class Application implements IApplication {
  
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