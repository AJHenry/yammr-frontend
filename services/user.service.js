import { AsyncStorage } from 'react-native';

export const userService = {
  login,
  logout,
  getUser,
};

const AUTHENTICATION = '/users/authenticate';

async function login(username, password) {
  console.log('logging in');
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  };

  let user = {
    token: 'inaibfiubau8y0e8h',
  };

  // For when successfully implemented
  //user = await fetch(AUTHENTICATION, requestOptions);

  if (user.token) await AsyncStorage.setItem('user', JSON.stringify(user));
  return user;
}

async function logout() {
  console.log('removing token');
  return await AsyncStorage.removeItem('user');
}

async function getUser() {
  return await AsyncStorage.getItem('user');
}
