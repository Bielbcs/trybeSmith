import IUser from '../interfaces/IUser';
import LoginModel from '../models/login.model';

export default class LoginService {
  private loginModel = new LoginModel();

  login = async (user: IUser) => {
    const u = await this.loginModel.login(user);

    return u;
  };
}