import { AsyncStorage } from 'react-native';
import { LOGIN, REGISTER, POST_ITEM } from '../constants/api.constants';
import axios from 'axios';

export const userService = {
  login,
  logout,
  getUser,
  register,
  postItem,
};

async function login(email, password) {
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

async function register(email, password) {
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

async function postItem(text) {
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

async function logout() {
  return await AsyncStorage.removeItem('userToken');
}

async function getUser() {
  return await AsyncStorage.getItem('userToken');
}
