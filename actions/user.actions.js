import { userService } from '../services';
import { store } from 'react-redux';

export const userActions = {
  login,
  logout,
};

function login(username, password) {
  userService.login(username, password).then(
    user => {
      store.dispatch({ type: userConstants.LOGIN_SUCCESS, user });
    },
    error => {
      store.dispatch({ type: userConstants.LOGIN_FAILURE, error });
    }
  );
}

function logout() {
  console.log('logging out');
  userService.logout().then(res => {
    store.dispatch({ type: userConstants.LOGOUT });
  });
}
