import { InjectionToken } from 'tsyringe';
import { BaseControllerInterface } from './BaseControllerInterface';
import { ProviderInterface } from './ProviderInterface';

export interface RouteProviderInterface extends ProviderInterface {
  readonly root: string;
  controllers: InjectionToken<BaseControllerInterface>[];
}