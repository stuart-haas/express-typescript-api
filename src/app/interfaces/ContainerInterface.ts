import { InjectionToken } from 'tsyringe';
import { ProviderInterface } from './ProviderInterface';

export interface ContainerInterface extends ProviderInterface {
  readonly providers: InjectionToken<ProviderInterface>[];
  boot(): void;
}