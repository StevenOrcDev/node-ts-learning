import * as taskService from '../services/tasks';

export async function getTask(_req, res) {
  try {
    const tasks = await taskService.getAllTasks();

    if (!tasks || tasks.length === 0) {
      return res.status(404).json({ message: 'No tasks found' });
    }

    res.json({ message: 'select all task', tasks });
  } catch (error) {
    res.status(404).json({ error: 'not found' });
  }
}

export async function getTaskById(req, res) {
  try {
    const { id } = req.params;

    const task = await taskService.getTaskById(parseInt(id));
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.json({ message: 'Task found', task });
  } catch (error) {
    res.status(404).json({ error: 'Error for the get by id' });
  }
}

export async function postTask(req, res) {
  try {
    const { description, isDone, personId } = req.body;

    const newTask = await taskService.createTask({ description, isDone, personId: personId ?? null });

    if (!newTask) {
      return res.status(400).json({ message: 'Failed to create task' });
    }

    res.json({ message: 'Task created', newTask });
  } catch (error) {
    res.status(404).json({ error: 'Unavalaible information' });
  }
}

export async function putTask(req, res) {
  try {
    const { id } = req.params;
    const { description, isDone, personId } = req.body;

    const updatedTask = await taskService.updateTask(parseInt(id), { description, isDone, personId: personId ?? null });

    if (!updatedTask) {
      return res.status(404).json({ message: 'Task not found or update failed' });
    }

    res.json({ message: 'Task updated', updatedTask });
  } catch (error) {
    res.status(404).json({ error: 'put error' });
  }
}

export async function deleteByIdTask(req, res) {
  try {
    const { id } = req.params;

    const taskDel = await taskService.deleteTask(parseInt(id));
    if (!taskDel) {
      return res.status(404).json({ message: 'Task not found or delete failed' });
    }

    res.json({ message: 'Task deleted', taskDel });
  } catch (error) {
    res.status(404).json({ error: 'delet error' });
  }
}
