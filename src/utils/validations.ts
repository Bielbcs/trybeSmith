import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import IProduct from '../interfaces/IProduct';
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

  checkError = (param: Error) => {
    const errorCode = param.message.includes('required') ? 400 : 422;

    return errorCode;
  };

  productValidation = async (req: Request, res: Response, next: NextFunction) => {
    const schema: Joi.ObjectSchema<IProduct> = Joi.object({
      name: Joi.string().min(3).required(),
      amount: Joi.string().min(3).required(),
    });

    try {
      await schema.validateAsync(req.body);
      return next();
    } catch (err) {
      if (err instanceof Error) {
        const code = this.checkError(err);
        res.status(code).json({ message: err.message });
      }
    }
  };

  userValidation = async (req: Request, res: Response, next: NextFunction) => {
    const schema: Joi.ObjectSchema<IUser> = Joi.object({
      username: Joi.string().min(3).required(),
      classe: Joi.string().min(3).required(),
      level: Joi.number().min(1).required(),
      password: Joi.string().min(8).required(),
    });

    try {
      await schema.validateAsync(req.body);
      return next();
    } catch (err) {
      if (err instanceof Error) {
        const code = this.checkError(err);
        res.status(code).json({ message: err.message });
      }
    }
  };
}