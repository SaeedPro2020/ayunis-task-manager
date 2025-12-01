import { TaskRepository } from '../../../domain/repositories/task.repository';
import { Task } from '../../../domain/entities/task.entity';

export class InMemoryTaskRepository implements TaskRepository {
  private tasks: Task[] = [];

  async findAll(): Promise<Task[]> {
    return this.tasks;
  }

  async findById(id: string): Promise<Task | null> {
    return this.tasks.find((t) => t.id === id) ?? null;
  }

  async create(task: Task): Promise<void> {
    this.tasks.push(task);
  }

  async update(task: Task): Promise<void> {
    const index = this.tasks.findIndex((t) => t.id === task.id);
    if (index !== -1) {
      this.tasks[index] = task;
    }
  }

  async delete(id: string): Promise<void> {
    this.tasks = this.tasks.filter((t) => t.id !== id);
  }
}
