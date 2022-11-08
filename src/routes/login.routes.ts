import { Router } from 'express';
import LoginController from '../controllers/login.controller';
import createToken from '../utils/token';
import Validations from '../utils/validations';

const router = Router();

const loginController = new LoginController();
const validations = new Validations();

router.post('/', validations.loginValidation, createToken, loginController.login);

export default router;
