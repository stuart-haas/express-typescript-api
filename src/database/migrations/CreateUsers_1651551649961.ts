import { Migration } from 'core/database/Migration';
import { IMigration } from 'core/database/interfaces/IMigration';
import { DataTypes } from 'core/database/DataTypes';

export class CreateUsers_1651551649961 extends Migration implements IMigration {
  async up() {
    const query = this.queryBuilder.createTable('users', [
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
    ]);
    await this.database.execute(query);
  }

  async down() {
    const query = this.queryBuilder.dropTable('users');
    await this.database.execute(query);
  }
}