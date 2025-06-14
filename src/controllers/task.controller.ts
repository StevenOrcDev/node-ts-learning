import { AppDataSource } from '../db/dbConnection';
import { Task } from '../entities';

export async function getTask(req, res) {
  try {
    const taskRep = AppDataSource.getRepository(Task);
    const tasks = await taskRep.find();
    res.json({ message: 'select all task', tasks });
  } catch (error) {
    res.status(404).json({ error: 'not found' });
  }
}

export async function getTaskById(req, res) {
  try {
    const { id } = req.params;
    const taskRep = AppDataSource.getRepository(Task);
    const task = taskRep.findOneBy({ id: parseInt(id) });
    if (!task) {
      res.status(404).json({ message: 'task no found with the given id : {id}' });
    }
    res.json({ message: 'Task found', task });
  } catch (error) {
    res.status(404).json({ error: 'Error for the get by id' });
  }
}

export async function postTask(req, res) {
  try {
    const { description, isDone } = req.body;
    const taskRep = AppDataSource.getRepository(Task);
    const newTask = await taskRep.create({ description, isDone });
    await taskRep.save(newTask);
    res.json({ message: 'Task created', newTask });
  } catch (error) {
    res.status(404).json({ error: 'Unavalaible information' });
  }
}

export async function putTask(req, res) {
  try {
    const { id } = req.params;
    const { description, isDone } = req.body;
    const taskRep = AppDataSource.getRepository(Task);
    const updatedTask = await taskRep.findOneBy({ id: parseInt(id) });
    if (!updatedTask) {
      res.status(404).json({ message: 'Not found' });
    }
    await taskRep.update(id, { description, isDone });
    res.json({ message: 'task updated' });
  } catch (error) {
    res.status(404).json({ error: 'put error' });
  }
}

export async function deleteByIdTask(req, res) {
  try {
    const { id } = req.params;
    const taskRep = AppDataSource.getRepository(Task);
    const taskDel = await taskRep.findOneBy({ id: parseInt(id) });
    if (!taskDel) {
      res.status(404).json({ message: ' Not found task whith the given id : {id} ' });
    }
    taskRep.delete(id);
    res.json({ message: 'Task deleted', taskDel });
  } catch (error) {
    res.status(404).json({ error: 'delet error' });
  }
}
