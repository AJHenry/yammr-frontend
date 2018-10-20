import React from 'react';
import { ThemeProvider, Button, colors } from 'react-native-elements';
import { View } from 'react-native';
import ThemePreview from './components/ThemePreview/ThemePreview';
import { theme } from './config/theme';
import { Provider } from 'react-redux';
import store from './store/index';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <ThemePreview />
        </ThemeProvider>
      </Provider>
    );
  }
}
