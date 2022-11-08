import { Router } from 'express';
import UserController from '../controllers/user.controller';
import createToken from '../utils/token';
import Validations from '../utils/validations';

const router = Router();

const userController = new UserController();
const validations = new Validations();

router.post('/', validations.userValidation, createToken, userController.registerUser);

export default router;
