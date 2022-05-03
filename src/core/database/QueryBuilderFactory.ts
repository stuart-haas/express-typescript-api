import { autoInjectable } from 'tsyringe';
import { CreateTable } from './queryBuilders/CreateTable';
import { DropTable } from './queryBuilders/DropTable';

@autoInjectable()
export class QueryBuilderFactory {

  createTable (name: string): CreateTable {
    return new CreateTable(name);
  }
  
  dropTable (name: string): DropTable {
    return new DropTable(name);
  }
}