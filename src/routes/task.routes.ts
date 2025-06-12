import { Router } from 'express';
import { Task } from '../entities';
import { AppDataSource } from '../db/dbConnection';

const router = Router();

router.get('/', async (_req, res) => {
  try {
    const taskRep = AppDataSource.getRepository(Task);
    const tasks = await taskRep.find();
    res.json({ message: 'select all task', tasks });
  } catch (error) {
    res.status(404).json({ error: 'not found' });
  }
});

router.get('/:id', async (req, res) => {
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
});

router.post('/', async (req, res) => {
  try {
    const { description, isDone } = req.body;
    const taskRep = AppDataSource.getRepository(Task);
    const newTask = await taskRep.create({ description, isDone });
    await taskRep.save(newTask);
    res.json({ message: 'Task created', newTask });
  } catch (error) {
    res.status(404).json({ error: 'Unavalaible information' });
  }
});

router.put('/:id', async (req, res) => {
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
});

router.delete('/:id', async (req, res) => {
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
});

export const taskRoutes = router;
