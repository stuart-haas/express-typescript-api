import { DataTypes } from 'core/database/DataTypes';
import { Column, Entity, PrimaryKey } from 'core/database/decorators';
import { Model } from 'core/database/Model';

@Entity('users')
export class User extends Model {

  @Column(DataTypes.INTEGER)
  @PrimaryKey()
    id: number;

  @Column(DataTypes.VARCHAR)
    username: string;

  @Column(DataTypes.VARCHAR)
    password: string;
}