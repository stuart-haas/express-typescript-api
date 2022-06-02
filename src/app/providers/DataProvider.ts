import { autoInjectable, singleton, container } from 'tsyringe';
import { IProvider } from 'core/interfaces';
import { Repository } from 'core/database/Repository';
import { User } from 'app/models';

@singleton()
@autoInjectable()
export class DataProvider implements IProvider {

  start(): void {
    container.register<Repository>('UserRepository', { useValue: new Repository(User) });
  }
}
