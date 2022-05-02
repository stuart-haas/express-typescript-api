import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { Application } from 'start/Application';
import { autoInjectable, singleton } from 'tsyringe';
import dotenv from 'dotenv';
import { IProvider } from 'core/interfaces/IProvider';

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