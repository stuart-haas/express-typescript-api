export const migration = (name: string) => 
`import { Migration } from 'core/database/abstracts';
import { IMigration } from 'core/database/interfaces';
import { DataTypes } from 'core/database/DataTypes';

export class ${name} extends Migration implements IMigration {
  async up() {
    //
  }

  async down() {
    //
  }
}`;