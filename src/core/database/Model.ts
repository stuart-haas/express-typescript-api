import { IModel } from './interfaces';

export class Model implements IModel {
  table: string;
  columns: any;
}