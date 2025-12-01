import { Module } from '@nestjs/common';
import { TaskController } from '../controllers/task.controller';
import { InMemoryTaskRepository } from '../repositories/in-memory-task.repository';

import { CreateTaskUseCase } from '../../../application/use-cases/create-task.usecase';
import { UpdateTaskUseCase } from '../../../application/use-cases/update-task.usecase';
import { ListTasksUseCase } from '../../../application/use-cases/list-tasks.usecase';
import { DeleteTaskUseCase } from '../../../application/use-cases/delete-task.usecase';
import { AssignPersonUseCase } from '../../../application/use-cases/assign-person.usecase';

@Module({
  controllers: [TaskController],
  providers: [
    // Repository binding (adapter)
    {
      provide: 'TaskRepository',
      useClass: InMemoryTaskRepository,
    },

    // Use-case providers
    {
      provide: CreateTaskUseCase,
      useFactory: (repo) => new CreateTaskUseCase(repo),
      inject: ['TaskRepository'],
    },
    {
      provide: UpdateTaskUseCase,
      useFactory: (repo) => new UpdateTaskUseCase(repo),
      inject: ['TaskRepository'],
    },
    {
      provide: ListTasksUseCase,
      useFactory: (repo) => new ListTasksUseCase(repo),
      inject: ['TaskRepository'],
    },
    {
      provide: DeleteTaskUseCase,
      useFactory: (repo) => new DeleteTaskUseCase(repo),
      inject: ['TaskRepository'],
    },
    {
      provide: AssignPersonUseCase,
      useFactory: (repo) => new AssignPersonUseCase(repo),
      inject: ['TaskRepository'],
    },
  ],
})
export class TaskModule {}
