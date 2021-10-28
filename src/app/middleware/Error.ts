import { NextFunction, Request, Response } from 'express';
import { TypeORMError } from 'typeorm';

export const Error = (error: any, req: Request, res: Response, next: NextFunction) => {
  const status = error.status || 400;
  if(error) {
    res.status(status);
    if(error instanceof TypeORMError) {
      return res.json({
        code: error.name,
        error: error.message
      });
    }
    return res.json({
      error: error.message
    });
  }
  return next();
}