import { promises as fsPromises } from 'fs';
import * as path from 'path';
import { migration } from '../templates';

export class MigrationService {
  migrationsPath: string;

  constructor() {
    this.migrationsPath = 'src/database/migrations';
  }

  async create(name: string) {
    try {
      const fileName = `${name}_${Date.now().toString()}`;
      const template = migration(fileName);
      await fsPromises.writeFile(path.join(this.migrationsPath, `${fileName}.ts`), template);
      return { fileName, template };
    } catch(err) {
      console.error(err);
    }
  }
}