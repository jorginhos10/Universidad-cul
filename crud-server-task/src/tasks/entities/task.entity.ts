import {
  Model,
  Column,
  Table,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';
import { User } from 'src/users/entities/user.entity';

@Table({ tableName: 'tasks' })
export class Task extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  description: string;

  @Column({
    type: DataType.ENUM('pending', 'in_progress', 'completed'),
    allowNull: true,
    defaultValue: 'pending',
  })
  status: string;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  dueDate: Date;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER, // Tipo de dato INTEGER para la columna 'userId'
    allowNull: false,
  })
  userId: number;
}

export const taskStatus = {
  pending: 'pending',
  inProgress: 'in_progress',
  completed: 'completed',
};
