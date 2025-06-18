import { Router } from 'express';
import { postPerson, deleteById, getPerson, getPersonById, putPerson } from '../controllers';
import { validateDto } from '../middlewares';
import { createPersonSchema } from '@dtos/persons/createPerson.dto';
import { Location } from '../constants/location';
import { getOrDeletePersonByIdSchema, updatePersonByIdSchema } from '@dtos/persons';

const router = Router();

router.get('/', getPerson);
router.get('/:id', validateDto(getOrDeletePersonByIdSchema, Location.PARAM), getPersonById);
router.post('/', validateDto(createPersonSchema, Location.BODY), postPerson);
router.put('/:id', validateDto(updatePersonByIdSchema, Location.PARAMBODY), putPerson);
router.delete('/:id', validateDto(getOrDeletePersonByIdSchema, Location.PARAM), deleteById);

export const personRoutes = router;
