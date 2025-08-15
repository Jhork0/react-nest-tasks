import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { UpdateTaskDto } from 'src/dtos/update-task.dto';
import { CreateTaskDto } from 'src/dtos/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  async FindAll() {
    return this.taskService.findAll();
  }

  @Post()
  async createOne(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }

  @Get(':id')
  async FindOne(@Param('id') idTarea: string) {
    return this.taskService.findOne(idTarea);
  }

  @Delete(':id')
  async DeleteOne(@Param('id') idTarea: string) {
    return this.taskService.delete(idTarea);
  }

  @Put(':id')
  async UpdateOne(
    @Param('id') idTarea: string,
    @Body() updates: UpdateTaskDto,
  ) {
    return this.taskService.updateUser(idTarea, updates);
  }
}
