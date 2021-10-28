import { Application } from 'express';

export interface AppInterface {
  server: Application;
  start(): void;
}