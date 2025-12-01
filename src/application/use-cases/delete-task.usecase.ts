import { TaskRepository } from '../../domain/repositories/task.repository';

export class DeleteTaskUseCase {
  constructor(private readonly repo: TaskRepository) {}

  async execute(id: string) {
    await this.repo.delete(id);
    return { message: `Task ${id} deleted` };
  }
}
