import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from 'src/schemas/task.schema';
import { CreateTaskDto } from 'src/dtos/create-task.dto';
import { UpdateTaskDto } from 'src/dtos/update-task.dto';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  findAll() {
    return this.taskModel.find();
  }
  async create(createTask: CreateTaskDto) {
    const existingTask = await this.taskModel.findOne({
      title: createTask.title,
    });

    if (existingTask) {
      throw new ConflictException(
        `Ya existe una tarea con el título: "${createTask.title}"`,
      );
    }

    return this.taskModel.create(createTask);
  }

  async findOne(id: string) {
    return this.taskModel.findById(id);
  }

  async delete(id: string) {
    return this.taskModel.findByIdAndDelete(id);
  }

  async updateUser(id: string, taskUpdated: UpdateTaskDto) {
    return this.taskModel.findByIdAndUpdate(id, taskUpdated);
  }
}
