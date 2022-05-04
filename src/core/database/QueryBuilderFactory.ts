import { autoInjectable } from 'tsyringe';
import { Model } from './Model';
import { Create, CreateTable, Delete, DropTable, Select, Update } from './queryBuilders';

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

  update(table: string, payload: Model): Update {
    return new Update(table, payload);
  }

  delete(table: string): Delete {
    return new Delete(table);
  }
}