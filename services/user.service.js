import { AsyncStorage } from 'react-native';
import { LOGIN, REGISTER } from '../constants/api.constants';

export const userService = {
  login,
  logout,
  getUser,
  register,
};

async function login(email, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: email, password: password }),
  };

  // For when successfully implemented
  const response = await fetch(LOGIN, requestOptions);
  console.log(response);

  if (response.status == 403) throw response;

  await AsyncStorage.setItem('userToken', JSON.stringify(response));
  return response;
}

async function register(email, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: email, password: password }),
  };
  console.log(requestOptions);
  const response = await fetch(REGISTER, requestOptions);
  console.log(response);
  return response;
}

async function logout() {
  return await AsyncStorage.removeItem('userToken');
}

async function getUser() {
  return await AsyncStorage.getItem('userToken');
}
