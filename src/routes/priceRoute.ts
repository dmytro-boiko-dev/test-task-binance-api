import {Router} from 'express';
import {getPrices} from '../controllers/priceController';

const router = Router();

router.get('/', getPrices);

export default router;