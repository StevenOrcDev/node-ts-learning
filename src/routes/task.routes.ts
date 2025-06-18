import { Router } from 'express';
import { getTask, getTaskById, putTask, deleteByIdTask, postTask } from '../controllers';
import { validateDto } from '../middlewares';
import { Location } from '../constants/location';
import { createTaskschema, getOrDeleteTaskByIdSchema, updateTaskByIdSchema } from '@dtos/tasks';

const router = Router();

router.get('/', getTask);
router.get('/:id', validateDto(createTaskschema, Location.PARAM), getTaskById);
router.post('/', validateDto(getOrDeleteTaskByIdSchema, Location.BODY), postTask);
router.put('/:id', validateDto(updateTaskByIdSchema, Location.PARAMBODY), putTask);
router.delete('/:id', validateDto(getOrDeleteTaskByIdSchema, Location.PARAM), deleteByIdTask);

export const taskRoutes = router;
