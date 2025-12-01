import { TaskRepository } from '../../domain/repositories/task.repository';

export class AssignPersonUseCase {
  constructor(private readonly repo: TaskRepository) {}

  async execute(taskId: string, personId: string) {
    const task = await this.repo.findById(taskId);
    if (!task) {
      throw new Error(`Task with id ${taskId} not found`);
    }

    if (!task.assignedTo.includes(personId)) {
      task.assignedTo.push(personId);
    }

    await this.repo.update(task);

    return task;
  }
}
