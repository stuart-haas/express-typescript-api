import { autoInjectable, singleton } from 'tsyringe';
import { IProvider } from 'core/interfaces/IProvider';
import { QueryBuilderFactory } from 'core/database/QueryBuilderFactory';
import { DataTypes } from 'core/database/DataTypes';

@singleton()
@autoInjectable()
export class DataProvider implements IProvider {

  constructor(private queryBuilderFactory: QueryBuilderFactory) {}

  start(): void {
    let query = this.queryBuilderFactory.createTable('users').ifNotExists().columns([
      {
        id: {
          type: DataTypes.INTEGER(),
          primaryKey: true,
        }
      },
      {
        username: {
          type: DataTypes.STRING(),
          nullable: false,
        }
      },
      {
        password: {
          type: DataTypes.TEXT(),
          nullable: false,
        }
      }
    ]).build();
    console.log(query);
    
    query = this.queryBuilderFactory.dropTable('users').ifExists().build();
    console.log(query);
  }
}