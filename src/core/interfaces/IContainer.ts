import { InjectionToken } from 'tsyringe';
import { IProvider } from './IProvider';

export interface IContainer extends IProvider {
  readonly providers: InjectionToken<IProvider>[];
}