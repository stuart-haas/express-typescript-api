import { NextFunction, Request, Response } from 'express';
import { ControllerMiddleware, RouteMiddleware } from 'core/http';

export const Authentication = (req: Request, res: Response, next: NextFunction) => {
  // console.log('Check if user is authenticated');
  return next();
};

export const Authorization = (role: string) => (req: Request, res: Response, next: NextFunction) => {
  // console.log(`Check if user is authorized with role ${role}`);
  return next();
};

export const RequireAuthentication = () => ControllerMiddleware(Authentication);

export const RequireAuthorization = (role: string) => RouteMiddleware(Authorization(role));