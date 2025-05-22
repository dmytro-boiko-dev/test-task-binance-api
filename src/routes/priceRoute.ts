import {Router} from 'express';
import {getPrices} from '../controllers/priceController';

const router = Router();

router.post('/', getPrices);

export default router;