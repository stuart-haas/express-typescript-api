import { autoInjectable, singleton, container } from 'tsyringe';
import { IProvider } from 'core/interfaces/IProvider';
import { User } from 'app/models/User';
import { Repository } from 'core/database/Repository';

export const UserRepository = Symbol('UserRepository');

@singleton()
@autoInjectable()
export class DataProvider implements IProvider {

  start(): void {
    container.register<Repository>(UserRepository, { useValue: new Repository(User) });
  }
}