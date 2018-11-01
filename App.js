import React from 'react';
import { ThemeProvider, Button, colors } from 'react-native-elements';
import { View } from 'react-native';
import { theme } from './config/theme';
import { Provider } from 'react-redux';
import store from './store/index';
import Register from './screens/Register/Register';
import Login from './screens/Login/Login';
import Authentication from './screens/Authentication/Authentication';
import AuthLoadingScreen from './screens/AuthLoadingScreen/AuthLoadingScreen';

//Stupid expo font hack
import { Font, AppLoading } from 'expo';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import Main from './screens/Main/Main';

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
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  // STUPID EXPO FONT HACK
  async componentWillMount() {
    await Font.loadAsync({
      OpenSans: require('./assets/fonts/OpenSans.ttf'),
      ProximaNova: require('./assets/fonts/ProximaNova.ttf'),
    });
    this.setState({ loading: false });
    await AsyncStorage.clear();
  }
  // END STUPID EXPO FONT HACK

  render() {
    // STUPID STUPID EXPO FONT HACK
    if (this.state.loading) {
      return <AppLoading />;
    }
    // END OF STUPID HACK

    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <RootNav />
        </ThemeProvider>
      </Provider>
    );
  }
}
