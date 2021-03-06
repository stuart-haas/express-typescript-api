import { autoInjectable, singleton } from 'tsyringe';
import { Pool, Client } from 'pg';

@autoInjectable()
@singleton()
export class Database {

  pool: Pool;
  client: Client;

  constructor() {
    this.pool = new Pool();
    this.client = new Client();
  }

  async execute(query: string, values?: Array<string | number | boolean>) {
    return await this.pool.query(query, values);
  }
}