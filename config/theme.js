export const colors = {
  primary: '#279af1',
  secondary: '#9f2042',
  success: '',
  danger: '',
  warning: '',
  info: '',
  light: '',
  dark: '',
  muted: '',
  error: '#ff0033',
  black: '#131112',
  white: '#f1f7ee',
  transparent: 'rgba(0,0,0,0)',
};

export const theme = {
  colors,
  Button: {
    raised: false,
    containerStyle: {
      marginTop: 20,
    },
    buttonStyle: {
      borderRadius: 100,
      elevation: 0,
      paddingLeft: 40,
      paddingRight: 40,
    },
    titleStyle: {
      fontWeight: '100',
    },
  },
  Input: {
    errorStyle: {
      fontSize: 12,
      fontWeight: '100',
      color: colors.error,
    },
    labelStyle: {
      fontSize: 12,
    },
    containerStyle: {
      //Need to fix the styles in RNE
      marginLeft: 20,
      //END FIX

      paddingTop: 5,
      paddingBottom: 5,
    },
    inputContainerStyle: {},
  },
};
