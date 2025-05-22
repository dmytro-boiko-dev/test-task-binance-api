import {Router} from 'express';
import {getPrices} from '../controllers/priceController';

const router = Router();

// router.get('/', getPrices);
router.post('/', getPrices);

export default router;