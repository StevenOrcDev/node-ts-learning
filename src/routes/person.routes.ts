import { Router } from 'express';
import { postPerson, deleteById, getPerson, getPersonById, putPerson } from '../controllers';

const router = Router();

router.get('/', getPerson);
router.get('/:id', getPersonById);
router.post('/', postPerson);
router.put('/:id', putPerson);
router.delete('/:id', deleteById);
export const personRoutes = router;
