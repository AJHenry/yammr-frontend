import React from 'react';
import { ThemeProvider, Button, colors } from 'react-native-elements';
import { theme } from './config/theme';
import { Provider } from 'mobx-react';
import Register from './screens/Register/Register';
import Login from './screens/Login/Login';
import Authentication from './screens/Authentication/Authentication';
import AuthLoadingScreen from './screens/AuthLoadingScreen/AuthLoadingScreen';

//Stupid expo font hack
import { Font, AppLoading } from 'expo';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import Main from './screens/Main/Main';

import userService from './services/user.service';
import PostStore from './mobx/postStore';

// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

const AuthStack = createStackNavigator({
  Authentication: {
    screen: Authentication,
  },
  Login: {
    screen: Login,
  },
  Register: {
    screen: Register,
  },
});

const AppStack = createStackNavigator({
  Main: {
    screen: Main,
  },
});

const RootNav = createSwitchNavigator(
  {
    AuthLoading: {
      screen: AuthLoadingScreen,
    },
    App: {
      screen: AppStack,
    },
    Auth: {
      screen: AuthStack,
    },
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

export default class App extends React.Component {
  store;

  constructor(props) {
    super(props);
    this.state = { loading: true };
    score = new PostStore(userService);
  }

  // STUPID EXPO FONT HACK
  async componentWillMount() {
    await Font.loadAsync({
      OpenSans: require('./assets/fonts/OpenSans.ttf'),
      ProximaNova: require('./assets/fonts/ProximaNova.ttf'),
    });
    this.setState({ loading: false });
  }
  // END STUPID EXPO FONT HACK

  render() {
    // STUPID STUPID EXPO FONT HACK
    if (this.state.loading) {
      return <AppLoading />;
    }
    // END OF STUPID HACK

    return (
      <Provider postStore={score}>
        <ThemeProvider theme={theme}>
          <RootNav />
        </ThemeProvider>
      </Provider>
    );
  }
}
