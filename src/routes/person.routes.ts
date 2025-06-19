import { Router } from 'express';
import { postPerson, deleteById, getPerson, getPersonById, putPerson } from '../controllers';
import { validateDto } from '../middlewares';
import { createPersonSchema } from '@dtos/persons/createPerson.dto';
import { RequestDataSource } from '../constants/location';
import { getOrDeletePersonByIdSchema, updatePersonByIdSchema } from '@dtos/persons';

const router = Router();

router.get('/', getPerson);
router.get('/:id', validateDto(getOrDeletePersonByIdSchema, RequestDataSource.PARAM), getPersonById);
router.post('/', validateDto(createPersonSchema, RequestDataSource.BODY), postPerson);
router.put('/:id', validateDto(updatePersonByIdSchema, RequestDataSource.PARAMBODY), putPerson);
router.delete('/:id', validateDto(getOrDeletePersonByIdSchema, RequestDataSource.PARAM), deleteById);

export const personRoutes = router;
