import { MiddlewareInterface } from './MiddlewareInterface';

export interface ControllerInterface {
  prefix?: string;
  middleware?: MiddlewareInterface | Array<MiddlewareInterface>
}