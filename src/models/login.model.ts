import { RowDataPacket } from 'mysql2';
import IUser from '../interfaces/IUser';
import connection from './connection';

export default class LoginModel {
  login = async (user: IUser) => {
    const [row] = await connection.execute<RowDataPacket[]>(`
    SELECT username, password FROM Trybesmith.Users
    WHERE username = ? AND password = ?
    `, [user.username, user.password]);
    return row;
  };
}