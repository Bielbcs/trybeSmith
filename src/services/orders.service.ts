import OrdersModel from '../models/orders.model';

export default class OrdersService {
  orderModel = new OrdersModel();

  getAll = async () => {
    const allOrders = await this.orderModel.getAll();

    return allOrders;
  };
}