import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import { theme, colors } from './config/theme';
import { Provider } from 'react-redux';
import store from './store/index';
import Register from './screens/Register/Register';
import Login from './screens/Login/Login';
import Authentication from './screens/Authentication/Authentication';
import Theme from './screens/Theme/Theme';
import { createStackNavigator } from 'react-navigation';
import Main from './screens/Main/Main';
//Stupid expo font hack
import { Font, AppLoading } from 'expo';

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
    Theme: {
      screen: Authentication,
    },
    Main: {
      screen: Main,
    },
  },
  {
    initialRouteName: 'Main',
    navigationOptions: {},
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
          <RootStack />
        </ThemeProvider>
      </Provider>
    );
  }
}
