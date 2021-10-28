import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { Server } from 'boot/server';
import { autoInjectable, singleton } from 'tsyringe';
import dotenv from 'dotenv';
import { ProviderInterface } from 'interfaces/ProviderInterface';

dotenv.config();

@singleton()
@autoInjectable()
export class MiddlewareProvider implements ProviderInterface {

  constructor(private server: Server) {}

  boot(): void {
    this.server.app.use(helmet());
    this.server.app.use(cors());
    this.server.app.use(express.json());
  }
}