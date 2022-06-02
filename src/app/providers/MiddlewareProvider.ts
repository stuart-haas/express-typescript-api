import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { autoInjectable, singleton } from 'tsyringe';
import { Application } from 'start';
import { IProvider } from 'core/interfaces';

dotenv.config();

@singleton()
@autoInjectable()
export class MiddlewareProvider implements IProvider {

  constructor(private app: Application) {}

  start(): void {
    this.app.server.use(helmet());
    this.app.server.use(cors());
    this.app.server.use(express.json());
  }
}