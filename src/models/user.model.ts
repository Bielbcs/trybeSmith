import IUser from '../interfaces/IUser';
import connection from './connection';

export default class UserModel {
  public registerUser = async (user: IUser) => {
    await connection.execute(
      `INSERT INTO Trybesmith.Users 
    (username, classe, level, password) 
    VALUE (?, ?, ?, ?)`, 
      [user.username, user.classe, user.level, user.password],
    );
  };
}