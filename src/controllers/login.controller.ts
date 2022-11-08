import { Request, Response } from 'express';
import LoginService from '../services/login.service';

export default class LoginController {
  private loginService = new LoginService();

  login = async (req: Request, res: Response) => {
    const { authorization } = req.headers;

    const test = await this.loginService.login(req.body);
    
    if (!test.length) return res.status(401).send({ message: 'Username or password invalid' });

    res.status(200).json({ token: authorization });
  };
}