import { Router } from 'express';
import { getTask, getTaskById, putTask, deleteByIdTask, postTask } from '../controllers';
import { validateDto } from '../middlewares';
import { RequestDataSource } from '../constants/location';
import { createTaskschema, getOrDeleteTaskByIdSchema, updateTaskByIdSchema } from '@dtos/tasks';

const router = Router();

router.get('/', getTask);
router.get('/:id', validateDto(createTaskschema, RequestDataSource.PARAM), getTaskById);
router.post('/', validateDto(getOrDeleteTaskByIdSchema, RequestDataSource.BODY), postTask);
router.put('/:id', validateDto(updateTaskByIdSchema, RequestDataSource.PARAMBODY), putTask);
router.delete('/:id', validateDto(getOrDeleteTaskByIdSchema, RequestDataSource.PARAM), deleteByIdTask);

export const taskRoutes = router;
