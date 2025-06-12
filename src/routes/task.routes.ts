import { Router } from 'express';
import { getTask, getTaskById, putTask, deleteById, postTask } from '../controllers/task.controller';

const router = Router();

router.get('/', getTask);
router.get('/:id', getTaskById);
router.post('/', postTask);
router.put('/:id', putTask);
router.delete('/:id', deleteById);

export const taskRoutes = router;
