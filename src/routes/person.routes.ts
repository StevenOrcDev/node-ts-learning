import { Router } from 'express';
import { postPerson, deleteById, getPerson, getPersonById, putPerson } from '../controllers';
import { validateDto } from '../middlewares';
import { createPersonSchema } from '@dtos/persons/createPerson.dto';

const router = Router();

router.get('/', getPerson);
router.get('/:id', getPersonById);
router.post('/', validateDto(createPersonSchema), postPerson);
router.put('/:id', putPerson);
router.delete('/:id', deleteById);

export const personRoutes = router;
