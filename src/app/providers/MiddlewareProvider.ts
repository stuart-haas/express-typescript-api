import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import App from '@bootstrap/app';
import { autoInjectable } from 'tsyringe';

@autoInjectable()
export class MiddlewareProvider {

  constructor(private app: App) {
    this.app.instance.use(helmet());
    this.app.instance.use(cors());
    this.app.instance.use(express.json());
  }
}