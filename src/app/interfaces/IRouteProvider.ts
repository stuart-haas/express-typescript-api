import { InjectionToken } from 'tsyringe';
import { IController } from './IController';
import { IProvider } from './IProvider';

export interface IRouteProvider extends IProvider {
  readonly root: string;
  readonly controllers: InjectionToken<IController>[];
}