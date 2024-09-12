import { Model, Column, Table, DataType } from 'sequelize-typescript';

@Table({ tableName: 'users' })
export class User extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.STRING, // Tipo de dato STRING para la columna 'name'
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING, // Tipo de dato STRING para la columna 'email'
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.STRING, // Tipo de dato STRING para la columna 'password'
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.ENUM('active', 'disabled'), // Tipo de dato ENUM para la columna 'status'
    allowNull: false,
    defaultValue: 'active',
  })
  status: string;

  @Column({
    type: DataType.ENUM('user', 'admin'), // Tipo de dato ENUM para la columna 'role'
    allowNull: false,
    defaultValue: 'user',
  })
  role: string;
}

export const userStatus = {
  active: 'active',
  disabled: 'disabled',
};
