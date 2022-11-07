import { RowDataPacket } from 'mysql2';
import connection from './connection';

export default class OrdersModel {
  getAll = async () => {
    const [rows] = await connection.execute<RowDataPacket[]>(`
    SELECT O.id, O.userId, JSON_ARRAYAGG(P.id) as 'productsIds' 
    FROM Trybesmith.Orders as O
    INNER JOIN Trybesmith.Products as P
    ON P.orderId = O.id
    GROUP BY O.id; `);

    return rows;
  };
}