import { CreateTaskDto, UpdateTaskDto } from '@dtos/tasks';
import { AppDataSource } from '../../db/dbConnection';

export async function getAllTasks() {
  const taskRepo = AppDataSource.getRepository('Task');
  return taskRepo.find();
}

export async function getTaskById(id: number) {
  const taskRepo = AppDataSource.getRepository('Task');
  return taskRepo.findOneBy({ id });
}

export async function createTask(data: CreateTaskDto) {
  const taskRepo = AppDataSource.getRepository('Task');
  const task = taskRepo.create(data);

  return taskRepo.save(task);
}

export async function updateTask(id: number, data: UpdateTaskDto) {
  const taskRepo = AppDataSource.getRepository('Task');
  const task = await taskRepo.findOneBy({ id });

  if (!task) {
    return null;
  }

  Object.assign(task, data);
  return taskRepo.save(task);
}

export async function deleteTask(id: number) {
  const taskRepo = AppDataSource.getRepository('Task');
  const task = await taskRepo.findOneBy({ id });

  if (!task) {
    return null;
  }

  await taskRepo.remove(task);
  return task;
}
