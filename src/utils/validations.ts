import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import IUser from '../interfaces/IUser';

export default class Validations {
  loginValidation = async (req: Request, res: Response, next: NextFunction) => {
    const schema: Joi.ObjectSchema<IUser> = Joi.object({
      username: Joi.string().required(),
      password: Joi.string().required(),
    });

    try {
      await schema.validateAsync(req.body);
      return next();
    } catch (err) {
      if (err instanceof Error) return res.status(400).json({ message: err.message });
    }
  };
}