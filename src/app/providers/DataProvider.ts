import { autoInjectable, singleton } from 'tsyringe';
import { IProvider } from 'core/interfaces/IProvider';
import { MigrationService } from 'core/database/services/MigrationService';

@singleton()
@autoInjectable()
export class DataProvider implements IProvider {

  constructor(private migrationService: MigrationService) {}

  async start(): Promise<void> {
    // const response = await this.migrationService.create('CreateUsers');
    // console.log(response);
  }
}