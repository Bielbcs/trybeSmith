import { Request, Response } from 'express';
import IUser from '../interfaces/IUser';
import UserService from '../services/user.service';

export default class UserController {
  userService = new UserService();

  registerUser = async (req: Request<object, object, IUser>, res: Response) => {
    const { authorization } = req.headers;
    const { username, classe, level, password } = req.body;

    await this.userService
      .registerUser({ username, classe, level, password });

    res.status(201).json({ token: authorization });
  };
}