import { Router } from 'express';
import ProductController from '../controllers/product.controller';

const router = Router();

const productController = new ProductController();

router.post('/products', productController.insertProduct);

router.get('/products', productController.getAll);

export default router;
