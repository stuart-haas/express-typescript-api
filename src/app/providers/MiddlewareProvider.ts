import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import App from 'boot/app';
import { autoInjectable } from 'tsyringe';
import dotenv from 'dotenv';

dotenv.config();
@autoInjectable()
export class MiddlewareProvider {

  constructor(private app: App) {
    this.app.instance.use(helmet());
    this.app.instance.use(cors());
    this.app.instance.use(express.json());
  }
}