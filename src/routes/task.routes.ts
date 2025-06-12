import { Router } from 'express';
import { getTask, getTaskById, putTask, deleteByIdTask, postTask } from '../controllers';

const router = Router();

router.get('/', getTask);
router.get('/:id', getTaskById);
router.post('/', postTask);
router.put('/:id', putTask);
router.delete('/:id', deleteByIdTask);

export const taskRoutes = router;
