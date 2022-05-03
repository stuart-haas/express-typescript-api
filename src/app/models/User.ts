import { DataTypes } from 'core/database/DataTypes';
import { Column, Entity } from 'core/database/decorators';
import { PrimaryKey } from 'core/database/decorators/PrimaryKey';
import { Model } from 'core/database/Model';
import { singleton } from 'tsyringe';

@singleton()
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