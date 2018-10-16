import React from 'react';
import { ThemeProvider, Button, colors } from 'react-native-elements';
import { View } from 'react-native';
import ThemePreview from './components/ThemePreview';

const theme = {
  colors: {
    primary: '#279af1',
    secondary: '#fcfc62',
    grey0: '#262626',
    grey1: '#4D4D4D',
    grey2: '#737373',
    grey3: '#7F7F7F',
    grey4: '#A6A6A6',
    grey5: '#CCCCCC',
    greyOutline: '#CCCCCC',
    searchBg: '#CCCCCC',
    error: '#ff0033',
    divider: '#CCCCCC',
    black: '#131112',
    white: '#f1f7ee',
    transparent: 'rgba(0,0,0,0)',
  },
  Button: {
    raised: false,
    containerStyle: {
      marginTop: 20,
    },
    buttonStyle: {
      backgroundColor: colors.transparent,
      borderColor: colors.primary,
      borderWidth: 2,
      borderRadius: 50,
      elevation: 0,
    },
    titleStyle: {
      color: colors.primary,
    },
  },
};

export default class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <ThemePreview />
      </ThemeProvider>
    );
  }
}
