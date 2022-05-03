import { autoInjectable, singleton } from 'tsyringe';
import { IProvider } from 'core/interfaces/IProvider';
import { QueryBuilder } from 'core/database/QueryBuilder';
import { Database } from 'core/database/Database';
import { DataTypes } from 'core/database/DataTypes';

@singleton()
@autoInjectable()
export class DataProvider implements IProvider {

  constructor(private database: Database, private queryBuilder: QueryBuilder) {}

  async start(): Promise<void> {
    const query = await this.queryBuilder.createTable('users', [
      {
        id: {
          type: DataTypes.INTEGER(),
          primaryKey: true,
          // autoIncrement: true,
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
    ]);
    // const query = await this.queryBuilder.dropTable('users');
    this.database.execute(query);
  }
}