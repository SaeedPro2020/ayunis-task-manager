import { Controller, Get, Post, Put, Delete, Body, Param, Inject } from '@nestjs/common';
import { CreateTaskUseCase } from '../../../application/use-cases/create-task.usecase';
import { UpdateTaskUseCase } from '../../../application/use-cases/update-task.usecase';
import { ListTasksUseCase } from '../../../application/use-cases/list-tasks.usecase';
import { DeleteTaskUseCase } from '../../../application/use-cases/delete-task.usecase';
import { AssignPersonUseCase } from '../../../application/use-cases/assign-person.usecase';
import { CreateTaskDto } from '../../../application/dto/create-task.dto';
import { UpdateTaskDto } from '../../../application/dto/update-task.dto';

@Controller('tasks')
export class TaskController {
  constructor(
    private readonly createTask: CreateTaskUseCase,
    private readonly updateTask: UpdateTaskUseCase,
    private readonly listTasks: ListTasksUseCase,
    private readonly deleteTask: DeleteTaskUseCase,
    private readonly assignPerson: AssignPersonUseCase,
  ) {}

  @Get()
  list() {
    return this.listTasks.execute();
  }

  @Post()
  create(@Body() dto: CreateTaskDto) {
    return this.createTask.execute(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateTaskDto) {
    return this.updateTask.execute(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.deleteTask.execute(id);
  }

  @Post(':id/assign')
  assign(@Param('id') id: string, @Body('personId') personId: string) {
    return this.assignPerson.execute(id, personId);
  }
}
