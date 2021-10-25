import { NextFunction, Request, Response } from 'express';

export interface MiddlewareInterface {
  <T>(req: Request & T, res: Response, next: NextFunction): void;
}