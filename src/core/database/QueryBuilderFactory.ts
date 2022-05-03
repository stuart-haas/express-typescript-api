import { autoInjectable } from 'tsyringe';
import { Model } from './Model';
import { Create } from './queryBuilders/Create';
import { CreateTable } from './queryBuilders/CreateTable';
import { DropTable } from './queryBuilders/DropTable';
import { Select } from './queryBuilders/Select';

@autoInjectable()
export class QueryBuilderFactory {

  createTable (table: string): CreateTable {
    return new CreateTable(table);
  }
  
  dropTable (table: string): DropTable {
    return new DropTable(table);
  }

  select (table: string): Select {
    return new Select(table);
  }

  create(table: string, payload: Model): Create {
    return new Create(table, payload);
  }
}