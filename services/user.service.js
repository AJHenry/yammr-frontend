import { AsyncStorage } from 'react-native';
import { LOGIN, REGISTER, POST_ITEM } from '../constants/api.constants';
import axios from 'axios';

class UserService {
  login = async (email, password) => {
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
  };

  register = async (email, password) => {
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
  };

  postItem = async text => {
    console.log('in service');
    const token = await AsyncStorage.getItem('userToken');
    console.log(token);
    let response;
    try {
      response = await axios.post(
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
    } catch (e) {
      response = { error: e };
    }
    return response;
  };

  logout = async () => {
    return await AsyncStorage.removeItem('userToken');
  };

  getUser = async () => {
    return await AsyncStorage.getItem('userToken');
  };
}

const userService = new UserService();
export default userService;
