import IUser from '../interfaces/IUser';
import UserModel from '../models/user.model';

export default class UserService {
  userModel = new UserModel();

  registerUser = async (user: IUser) => {
    await this.userModel.registerUser(user);
  }; 
}