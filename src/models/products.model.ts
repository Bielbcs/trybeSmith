import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';

export default class ProductModel {
  public insertProduct = async (name: string, amount: string) => {
    const [rows] = await connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );

    return rows.insertId;
  };

  public getAll = async () => {
    const [rows] = await connection.execute<RowDataPacket[]>('SELECT * FROM Trybesmith.Products');

    return rows;
  };
}