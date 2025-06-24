import { Person, Task } from '../../entities';
import { AppDataSource } from '../../db/dbConnection';
import { CreateTaskDto, UpdateTaskDto } from '@dtos/tasks';
import { PersonNotFoundError, TaskNotFoundError } from '../../personNotFound/personNotFound';

export async function getAllTask(): Promise<Task[]> {
  const taskRepo = AppDataSource.getRepository(Task);
  return taskRepo.find({ relations: { person: true } });
}

export async function getTaskById(id: number): Promise<Task | null> {
  const taskRepo = AppDataSource.getRepository(Task);
  return taskRepo.findOneBy({ id });
}

export async function createTask(data: CreateTaskDto): Promise<Task> {
  const taskRepo = AppDataSource.getRepository(Task);
  const personRepo = AppDataSource.getRepository(Person);

  const task = taskRepo.create(data);

  if (data.personId) {
    const person = await personRepo.findOneBy({ id: Number(data.personId) });
    if (!person) {
      throw new PersonNotFoundError(String(data.personId));
    }
    task.person = person;
  }

  return taskRepo.save(task);
}

export async function updateTask(id: number, data: UpdateTaskDto): Promise<Task | null> {
  const taskRepo = AppDataSource.getRepository(Task);
  const personRepo = AppDataSource.getRepository(Person);

  const task = await taskRepo.findOneBy({ id });
  if (!task) {
    throw new TaskNotFoundError(String(id));
  }

  if (data.description) task.description = data.description;
  if (data.isDone) task.isDone = data.isDone;

  if (data.personId) {
    const person = await personRepo.findOneBy({ id: data.personId });
    if (!person) {
      throw new PersonNotFoundError(String(data.personId));
    }
    task.person = person;
  }

  return taskRepo.save(task);
}

export async function deleteTask(id: number): Promise<Task | null> {
  const taskRepo = AppDataSource.getRepository(Task);
  const task = await taskRepo.findOneBy({ id });

  if (!task) {
    throw new TaskNotFoundError(String(id));
  }

  await taskRepo.remove(task);
  return task;
}
