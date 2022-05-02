import { NextFunction, Request, Response } from 'express';

export const Error = (error: any, req: Request, res: Response, next: NextFunction) => {
  const status = error.status || 400;
  if(error) {
    res.status(status);
    return res.json({
      error: error.message
    });
  }
  return next();
};