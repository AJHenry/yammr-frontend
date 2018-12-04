import { AsyncStorage } from 'react-native';
import {
  LOGIN,
  REGISTER,
  POST_ITEM,
  GET_FEED,
  DELETE_ACC,
} from '../constants/api.constants';
import axios from 'axios';

class UserService {
  login = async (email, password) => {
    let response;
    try {
      response = await axios.post(
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
    } catch (e) {
      response = { error: e };
    }
    return response;
  };

  register = async (email, password) => {
    let response;
    try {
      response = await axios.post(
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
    } catch (e) {
      response = { error: e };
    }
    return response;
  };

  postItem = async text => {
    const token = await AsyncStorage.getItem('userToken');
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

  getFeed = async start => {
    const token = await AsyncStorage.getItem('userToken');
    let response;
    try {
      response = await axios.get(
        GET_FEED,
        { start: start },
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
    if (response.error) return response;
    return response.data;
  };

  getFeedFresh = async () => {
    const token = await AsyncStorage.getItem('userToken');
    let response;
    try {
      response = await axios.get(
        GET_FEED,
        {},
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
    if (response.error) return response;
    return response.data;
  };

  getUserFeed = async () => {
    const token = await AsyncStorage.getItem('userToken');
    let response;
    try {
      response = await axios.get(
        GET_ME,
        {},
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
    if (response.error) return response;
    return response.data;
  };

  deleteAccount = async () => {
    const token = await AsyncStorage.getItem('userToken');
    let response;
    try {
      response = await axios.get(
        DELETE_ACC,
        {},
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
    if (response.error) return response;
    return this.logout();
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
