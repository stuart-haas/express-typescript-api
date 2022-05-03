import { autoInjectable } from 'tsyringe';
import { IColumn } from './interfaces';
import { Model } from './Model';
import { Create } from './queryBuilders/Create';
import { CreateTable } from './queryBuilders/CreateTable';
import { Delete } from './queryBuilders/Delete';
import { DropTable } from './queryBuilders/DropTable';
import { Select } from './queryBuilders/Select';
import { Update } from './queryBuilders/Update';

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

  update(table: string, payload: Model, columns: IColumn[]): Update {
    return new Update(table, payload, columns);
  }

  delete(table: string): Delete {
    return new Delete(table);
  }
}