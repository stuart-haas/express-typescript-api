import 'reflect-metadata';
import dotenv from 'dotenv';
import { container } from 'tsyringe';
import { MiddlewareProvider } from '@app/providers/MiddlewareProvider';
import { RouteProvider } from '@app/providers/RouteProvider';
import { BootProvider } from '@app/providers/BootProvider';

dotenv.config();

container.resolve(MiddlewareProvider);
container.resolve(RouteProvider);
container.resolve(BootProvider);

