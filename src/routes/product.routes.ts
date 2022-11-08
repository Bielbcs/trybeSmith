import { Router } from 'express';
import ProductController from '../controllers/product.controller';
import Validations from '../utils/validations';

const router = Router();

const productController = new ProductController();

const validations = new Validations();

router.post('/', validations.productValidation, productController.insertProduct);

router.get('/', productController.getAll);

export default router;
