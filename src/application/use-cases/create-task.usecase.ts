import { TaskRepository } from '../../domain/repositories/task.repository';
import { Task } from '../../domain/entities/task.entity';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from '../dto/create-task.dto';

export class CreateTaskUseCase {
  constructor(private readonly repo: TaskRepository) {}

  async execute(dto: CreateTaskDto) {
    const task = new Task(uuid(), dto.title, dto.description ?? null);
    await this.repo.create(task);
    return task;
  }
}
