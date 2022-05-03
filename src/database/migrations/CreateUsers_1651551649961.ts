import { Migration } from 'core/database/abstracts/Migration';
import { IMigration } from 'core/database/interfaces';
import { DataTypes } from 'core/database/DataTypes';

export class CreateUsers_1651551649961 extends Migration implements IMigration {
  async up() {
    const query = this.queryBuilderFactory.createTable('users')
      .ifNotExists()
      .columns([
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
    await this.database.execute(query);
  }

  async down() {
    const query = this.queryBuilderFactory.dropTable('users').build();
    await this.database.execute(query);
  }
}