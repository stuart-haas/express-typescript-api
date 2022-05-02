import { autoInjectable, singleton } from 'tsyringe';
import { IProvider } from 'core/interfaces/IProvider';
import { Application } from 'start/Application';
import { Database } from 'core/database/Database';
import { createTable } from 'core/database/migrations';
import { INTEGER, STRING, TEXT } from 'core/database/migrations/dataTypes';

@singleton()
@autoInjectable()
export class DataProvider implements IProvider {

  constructor(private app: Application, private database: Database) {}

  start(): void {
    // this.database.pool.query('SELECT NOW()', (err, res) => {
    //   console.log(err, res);
    //   this.database.pool.end();
    // });
    createTable('users', [
      {
        id: {
          type: INTEGER(),
          primaryKey: true,
        }
      },
      {
        username: {
          type: STRING(),
          nullable: false,
        }
      },
      {
        password: {
          type: TEXT(),
          nullable: false,
        }
      }
    ]);
  }
}