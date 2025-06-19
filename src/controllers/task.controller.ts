import * as taskService from '../services/tasks';

export async function getTask(_req, res) {
  try {
    const tasks = await taskService.getAllTask();

    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch task' });
  }
}

export async function getTaskById(req, res) {
  try {
    const id = Number(req.params.id);
    const task = taskService.getTaskById(id);

    if (!task) {
      res.status(404).json({ error: 'task no found ' });
    }

    res.json({ message: 'Task found', task });
  } catch (error) {
    res.status(404).json({ error: 'Error for the get by id' });
  }
}

export async function postTask(req, res) {
  try {
    const { description, isDone, personId } = req.body;
    const task = await taskService.createTask({ description, isDone, personId });

    res.status(500).json(task);
  } catch (error) {
    res.status(404).json({ error: 'Unavalaible information' });
  }
}

export async function putTask(req, res) {
  try {
    const id = Number(req.params.id);
    const { description, isDone, personId } = req.body;
    const updatedTask = await taskService.updateTask(id, { description, isDone, personId });

    if (!updatedTask) {
      res.status(404).json({ message: 'Task Not found' });
      return;
    }

    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: 'put error' });
  }
}

export async function deleteByIdTask(req, res) {
  try {
    const id = Number(req.params.id);
    const taskDel = await taskService.deleteTask(id);

    if (!taskDel) {
      res.status(404).json({ message: ' Not found task whith the given id : {id} ' });
    }

    res.json({ message: 'Task deleted', taskDel });
  } catch (error) {
    res.status(500).json({ error: 'delet error' });
  }
}
