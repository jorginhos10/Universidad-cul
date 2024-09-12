import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  UseGuards,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('tasks')
@UseGuards(JwtAuthGuard)
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post('/create')
  create(@Body() createTaskDto: CreateTaskDto, @Req() req) {
    const userId = req.user.id;
    return this.tasksService.create(createTaskDto, userId);
  }

  @Get('/me')
  findMyPost(@Req() req) {
    const userId = req.user.id;
    return this.tasksService.findMyTasks(userId);
  }

  @Patch('update/:id')
  update(
    @Param('id') id: string,
    @Body() updateTaskDto: UpdateTaskDto,
    @Req() req,
  ) {
    const userId = req.user.id;
    return this.tasksService.updateTask(+id, updateTaskDto, userId);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string, @Req() req) {
    const userId = req.user.id;
    return this.tasksService.remove(+id, userId);
  }
}
