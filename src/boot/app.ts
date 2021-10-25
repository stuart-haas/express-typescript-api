import express from 'express';
import { singleton } from 'tsyringe';

@singleton()
export default class App {
  
  public instance: express.Application;

  constructor() {
    this.instance = express();
  }

  public start() {
    this.instance.listen(process.env.PORT, () => {
      console.log(
        `Application is up and running on port ${process.env.PORT}`
      );
    });
  }
}