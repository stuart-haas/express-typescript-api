import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { App } from 'boot/app';
import { autoInjectable, singleton } from 'tsyringe';
import dotenv from 'dotenv';
import { ProviderInterface } from 'interfaces/ProviderInterface';

dotenv.config();

@singleton()
@autoInjectable()
export class MiddlewareProvider implements ProviderInterface {

  constructor(private app: App) {}

  boot(): void {
    this.app.server.use(helmet());
    this.app.server.use(cors());
    this.app.server.use(express.json());
  }
}