import { Request, Response } from 'express';
import OrdersService from '../services/orders.service';

export default class OrderController {
  orderService = new OrdersService();

  getAll = async (_req: Request, res: Response) => {
    const allOrders = await this.orderService.getAll();

    res.status(200).json(allOrders);
  };
}