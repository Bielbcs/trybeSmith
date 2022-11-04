import { Request, Response } from 'express';
import ProductService from '../services/products.service';

export default class ProductController {
  productService = new ProductService();

  insertProduct = async (req: Request, res: Response) => {
    const { body } = req;

    const inserted = await this.productService.insertProduct(body);

    res.status(201).json(inserted);
  };
}