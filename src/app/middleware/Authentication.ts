import { NextFunction, Request, Response } from 'express';

export const Authentication = (req: Request, res: Response, next: NextFunction) => {
  console.log('Check if user is authenticated');
  return next();
}