import { Router } from 'express';
import { getTask, getTaskById, putTask, deleteByIdTask, postTask } from '../controllers';
import validateDto from '../middlewares/validateDto';
import { RequestType } from '../models';
import { updateTaskSchema, createTaskSchema, idTaskParamSchema } from '../dtos/tasks';

const router = Router();

router.get('/', getTask);
router.get('/:id', validateDto(idTaskParamSchema, RequestType.PARAMS), getTaskById);
router.post('/', validateDto(createTaskSchema), postTask);
router.put('/:id', [validateDto(idTaskParamSchema, RequestType.PARAMS), validateDto(updateTaskSchema)], putTask);
router.delete('/:id', validateDto(idTaskParamSchema, RequestType.PARAMS), deleteByIdTask);

export const taskRoutes = router;
