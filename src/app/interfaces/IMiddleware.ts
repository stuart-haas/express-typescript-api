import { NextFunction, Request, Response } from 'express';

export interface IMiddleware {
  <T>(req: Request & T, res: Response, next: NextFunction): void;
}