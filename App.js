import React from 'react';
import { ThemeProvider, Button, colors } from 'react-native-elements';
import { theme } from './config/theme';
import { Provider } from 'react-redux';
import store from './store/index';
import Register from './screens/Register/Register';
import Login from './screens/Login/Login';
import Authentication from './screens/Authentication/Authentication';
import { createStackNavigator } from 'react-navigation';

const RootStack = createStackNavigator(
  {
    Authentication: {
      screen: Authentication,
    },
    Login: {
      screen: Login,
    },
    Register: {
      screen: Register,
    },
  },
  {
    initialRouteName: 'Authentication',
  }
);
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <RootStack />
        </ThemeProvider>
      </Provider>
    );
  }
}
