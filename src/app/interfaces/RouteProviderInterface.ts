import { InjectionToken } from 'tsyringe';
import { ControllerInterface } from './ControllerInterface';
import { ProviderInterface } from './ProviderInterface';

export interface RouteProviderInterface extends ProviderInterface {
  readonly root: string;
  readonly controllers: InjectionToken<ControllerInterface>[];
}