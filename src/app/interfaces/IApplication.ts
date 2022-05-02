import { Application } from 'express';

export interface IApplication {
  server: Application;
  start(): void;
}