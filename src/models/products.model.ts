import { ResultSetHeader } from 'mysql2';
import connection from './connection';

export default class ProductModel {
  public insertProduct = async (name: string, amount: number) => {
    const [rows] = await connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );

    return rows.insertId;
  };
}