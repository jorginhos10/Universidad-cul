import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task, taskStatus } from './entities/task.entity';

@Injectable()
export class TasksService {
  async create(createTaskDto: CreateTaskDto, userId: number) {
    const task = await Task.create({
      title: createTaskDto.title,
      description: createTaskDto.description,
      status: createTaskDto.status,
      dueDate: createTaskDto.dueDate,
      userId: userId,
    });

    return task;
  }

  async findMyTasks(userId: number) {
    const task = await Task.findAll({
      where: {
        userId,
      },
    });

    return task;
  }

  async updateTask(id: number, updateTaskDto: UpdateTaskDto, userId: number) {
    const task = await Task.findByPk(id);
    if (!task) {
      throw new NotFoundException(`Task with id: ${id} not found`);
    }
    if (task.userId !== userId) {
      throw new ForbiddenException(
        'You do not have permission to update this task',
      );
    }

    await task.update(updateTaskDto);

    return {
      status: 'success',
      messge: 'Task update successfully',
    };
  }

  async remove(id: number, userId: number) {
    const task = await Task.findByPk(id);
    if (!task) {
      throw new NotFoundException(`Task with id: ${id} not found`);
    }

    if (task.userId !== userId) {
      throw new ForbiddenException(
        'You do not have permission to delete this task',
      );
    }

    await task.destroy();
    return {
      status: 'success',
      messge: 'Task delete successfully',
    };
  }
}
