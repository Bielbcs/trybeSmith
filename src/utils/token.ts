import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import 'dotenv';

const { JWT_SECRET } = process.env;

const createToken = (req: Request, _res: Response, next: NextFunction) => {
  const token = jwt.sign(req.body, JWT_SECRET as string);

  req.headers.authorization = token;

  next();
};

export default createToken;