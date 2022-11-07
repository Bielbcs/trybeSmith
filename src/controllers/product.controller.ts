import { Request, Response } from 'express';
import ProductService from '../services/products.service';

export default class ProductController {
  productService = new ProductService();

  insertProduct = async (req: Request, res: Response) => {
    const { body } = req;

    const inserted = await this.productService.insertProduct(body);

    res.status(201).json(inserted);
  };

  getAll = async (_req: Request, res: Response) => {
    const products = await this.productService.getAll();

    res.status(200).json(products);
  };
}