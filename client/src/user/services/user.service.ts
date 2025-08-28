import { api } from '@services/api';

export class UserService {

  static async getSayHello() {
    const response = await api.get(`/hello`);
    return response.data;
  }
}
