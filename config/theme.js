import { colors } from 'react-native-elements';

export const theme = {
  colors: {
    primary: '#279af1',
    secondary: '#fcfc62',
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
