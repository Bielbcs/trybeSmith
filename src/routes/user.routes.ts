import { Router } from 'express';
import UserController from '../controllers/user.controller';
import createToken from '../utils/token';

const router = Router();

const userController = new UserController();

router.post('/', createToken, userController.registerUser);

export default router;
