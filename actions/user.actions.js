import { userService } from '../services';
import { userConstants } from '../constants/user.constants';

export const userActions = {
  login,
  logout,
};

function login(username, password) {
  return userService.login(username, password).then(
    user => {
      return success(user);
    },
    error => {
      return failure(error);
    }
  );

  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}

function logout() {
  userService.logout();
  return { type: userConstants.LOGOUT };
}
