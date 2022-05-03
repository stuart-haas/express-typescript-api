import { ALL } from '../constants';

export abstract class QueryBuilder {
  protected name: string;
  protected cols = ALL;
  protected options = '';
  protected where = '';
}