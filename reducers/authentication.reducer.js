import { AsyncStorage } from 'react-native';
import { userConstants } from '../constants/user.constants';

let user = async () => await AsyncStorage.getItem('userToken');

const initialState = user ? { loggedIn: true, user } : {};

export const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state;
  }
};
