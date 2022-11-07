import ProductModel from '../models/products.model';
import IProduct from '../interfaces/IProduct';

export default class ProductService {
  product = new ProductModel();

  insertProduct = async (product: IProduct): Promise<IProduct> => {
    const id = await this.product.insertProduct(product.name, product.amount);

    const insertedProduct = { id, ...product };

    return insertedProduct;
  };

  getAll = async () => {
    const products = await this.product.getAll();

    return products;
  };
}
