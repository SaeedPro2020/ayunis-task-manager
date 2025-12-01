import { CreateTaskUseCase } from '../../../src/application/use-cases/create-task.usecase';
import { InMemoryTaskRepository } from '../../../src/infrastructure/nest/repositories/in-memory-task.repository';

describe('CreateTaskUseCase', () => {
  it('should create a task with an id and correct fields', async () => {
    const repo = new InMemoryTaskRepository();
    const usecase = new CreateTaskUseCase(repo);

    const result = await usecase.execute({
      title: 'Test Task',
      description: 'Description...',
    });

    expect(result.id).toBeDefined();
    expect(result.title).toBe('Test Task');
    expect(result.description).toBe('Description...');
  });
});
