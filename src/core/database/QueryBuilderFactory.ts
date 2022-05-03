import { autoInjectable } from 'tsyringe';
import { CreateTable } from './queryBuilders/CreateTable';
import { DropTable } from './queryBuilders/DropTable';
import { Select } from './queryBuilders/Select';

@autoInjectable()
export class QueryBuilderFactory {

  createTable (name: string): CreateTable {
    return new CreateTable(name);
  }
  
  dropTable (name: string): DropTable {
    return new DropTable(name);
  }

  select (name: string): Select {
    return new Select(name);
  }
}