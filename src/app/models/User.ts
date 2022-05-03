import { DataTypes } from 'core/database/DataTypes';
import { Column, Entity } from 'core/database/decorators';
import { Model } from 'core/database/Model';

@Entity('users')
export class User extends Model {

  @Column(DataTypes.INTEGER)
    id: number;

  @Column(DataTypes.VARCHAR)
    username: string;

  @Column(DataTypes.VARCHAR)
    password: string;
}