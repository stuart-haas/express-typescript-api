import { QueryBuilder } from '../abstracts/QueryBuilder';
import { INSERT_INTO, RETURNING, VALUES } from '../constants';
import { IQueryBuilder } from '../interfaces';
import { Model } from '../Model';

export class Create extends QueryBuilder implements IQueryBuilder {

  constructor(table: string, payload: Model) {
    super(table);
    this.mapPayload(payload);
    this.rawQuery = `${INSERT_INTO} ${table} ${VALUES}(${this.params}) $returning`;
  }

  returning(): Create {
    this.query.returning = RETURNING;
    return this;
  }

  build(): string {
    return super.build();
  }

  mapPayload(payload: Model) {
    this.values = Object.values(payload);
    this.params = this.values.map((e: string | number, i: number) => `$${i + 1}`).join(', ');
  }

  get payload() {
    return this.values;
  }
}