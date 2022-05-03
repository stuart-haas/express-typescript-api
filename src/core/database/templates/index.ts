export const migration = (name: string) => 
`import { Migration } from 'core/database/Migration';
import { IMigration } from 'core/database/interfaces/IMigration';
import { DataTypes } from 'core/database/DataTypes';

export class ${name} extends Migration implements IMigration {
  async up() {
    //
  }

  async down() {
    //
  }
}`;