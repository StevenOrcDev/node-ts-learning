import { Task } from '../../entities';
import { AppDataSource } from '../../db/dbConnection';
import { CreateTaskDto, UpdateTaskDto } from '@dtos/tasks';

export async function getAllTask(): Promise<Task[]> {
  const taskRepo = AppDataSource.getRepository(Task);

  return taskRepo.find();
}

export async function getTaskById(id: number): Promise<Task | null> {
  const taskRepo = AppDataSource.getRepository(Task);
  return taskRepo.findOneBy({ id });
}

export async function createTask(data: CreateTaskDto): Promise<Task> {
  const taskrepo = AppDataSource.getRepository(Task);

  const task = taskrepo.create(data);

  return taskrepo.save(task);
}

export async function updateTask(id: number, data: UpdateTaskDto): Promise<Task | null> {
  const taskRepo = AppDataSource.getRepository(Task);
  const task = await taskRepo.findOneBy({ id });
  if (!task) {
    return null;
  }
  Object.assign(task, data);

  return taskRepo.save(task);
}

export async function deleteTask(id: number): Promise<Task | null> {
  const taskRepo = AppDataSource.getRepository(Task);
  const task = await taskRepo.findOneBy({ id });

  if (!task) {
    return null;
  }

  await taskRepo.remove(task);
  return task;
}
