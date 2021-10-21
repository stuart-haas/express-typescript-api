import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

export default class App {
  private app: express.Application;

  constructor() {
    this.app = express();

    this.applyMiddleware();
    this.applyRoutes();
  }

  public start() {
    this.app.listen(process.env.PORT, () => {
      console.log(
        `Application is up and running on port ${process.env.PORT}`
      );
    });
  }

  private applyMiddleware() {
    this.app.use(helmet());
    this.app.use(cors());
    this.app.use(express.json());
  }

  private applyRoutes() {
    this.app.get('/', (req, res) => {
      res.send('Welcome to the API!');
    })
  }
}