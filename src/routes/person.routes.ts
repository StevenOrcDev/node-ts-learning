import { Router } from 'express';
import { postPerson, deleteById, getPerson, getPersonById, putPerson } from '../controllers';
import { createPersonSchema } from '@dtos/persons/createPerson.dto';
import validateDto from '../middlewares/validateDto';
import { idPersonParamSchema, updatePersonSchema } from '@dtos/persons';
import { RequestType } from '../models';

const router = Router();

router.get('/', getPerson);
router.get('/:id', validateDto(idPersonParamSchema, RequestType.PARAMS), getPersonById);
router.post('/', validateDto(createPersonSchema), postPerson);
router.put('/:id', [validateDto(idPersonParamSchema, RequestType.PARAMS), validateDto(updatePersonSchema)], putPerson);
router.delete('/:id', validateDto(idPersonParamSchema, RequestType.PARAMS), deleteById);

export const personRoutes = router;
