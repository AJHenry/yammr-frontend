import { userService } from '../services';
import { userConstants } from '../constants/user.constants';

export const userActions = {
  login,
  logout,
  register,
};

async function login(email, password) {
  return userService.login(email, password).then(
    user => {
      return success(user);
    },
    error => {
      return failure(error);
    }
  );

  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, userToken: user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error: error };
  }
}

async function register(email, password) {
  return userService.register(email, password).then(response => {
    return { type: userConstants.REGISTER_SENT, response: response };
  });
}

function logout() {
  userService.logout();
  return { type: userConstants.LOGOUT };
}
