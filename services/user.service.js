import { AsyncStorage } from 'react-native';
import { LOGIN, REGISTER, POST_ITEM } from '../constants/api.constants';
import axios from 'axios';

class UserService {
  async login(email, password) {
    const response = await axios.post(
      LOGIN,
      {
        email: email,
        password: password,
      },
      {
        headers: { 'Content-Type': 'application/json' },
        validateStatus: status => status == 200,
      }
    );

    await AsyncStorage.setItem('userToken', response.headers.authorization);
    return response;
  }

  async register(email, password) {
    return await axios.post(
      REGISTER,
      {
        email: email,
        password: password,
      },
      {
        headers: { 'Content-Type': 'application/json' },
        validateStatus: status => status == 200,
      }
    );
  }

  async postItem(text) {
    const token = await AsyncStorage.getItem('userToken');
    return await axios.post(
      POST_ITEM,
      { text: text },
      {
        headers: {
          Authorization: token,
          'Content-Type': 'application/json',
        },
        validateStatus: status => status == 200,
      }
    );
  }

  async logout() {
    console.log('logging out');
    return await AsyncStorage.removeItem('userToken');
  }

  async getUser() {
    return await AsyncStorage.getItem('userToken');
  }
}

const userService = new UserService();
export default userService;
