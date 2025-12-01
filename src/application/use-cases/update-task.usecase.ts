import { TaskRepository } from '../../domain/repositories/task.repository';
import { UpdateTaskDto } from '../dto/update-task.dto';

export class UpdateTaskUseCase {
  constructor(private readonly repo: TaskRepository) {}

  async execute(id: string, dto: UpdateTaskDto) {
    const task = await this.repo.findById(id);
    if (!task) {
      throw new Error(`Task with id ${id} not found`);
    }

    if (dto.title !== undefined) task.title = dto.title;
    if (dto.description !== undefined) task.description = dto.description;

    await this.repo.update(task);

    return task;
  }
}
