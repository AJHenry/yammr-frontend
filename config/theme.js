export const colors = {
  primary: '#279af1',
  secondary: '#9f2042',
  success: '#03cea4',
  danger: '#fb4d3d',
  warning: '#eac435',
  info: '#0582ca',
  light: '#f1f7ee',
  dark: '#131112',
  muted: 'rgba(121, 128, 134, 0.3)',
  error: '#ff0033',
  black: '#131112',
  white: '#fff',
  grey: '#A9A9A9',
  transparent: 'rgba(0,0,0,0)',
};

export const Avatar = {
  containerStyle: {
    margin: 10,
  },
};

export const Badge = {
  containerStyle: {
    margin: 5,
  },
};

export const Button = {
  raised: false,
  containerStyle: {
    margin: 10,
    minWidth: 150,
  },
  buttonStyle: {
    borderRadius: 100,
    elevation: 0,
    paddingLeft: 20,
    paddingRight: 20,
  },
  titleStyle: {
    fontWeight: '100',
  },
};

export const ButtonGroup = {};

export const Card = {
  containerStyle: {
    elevation: 0,
    borderRadius: 6,
    margin: 10,
  },
  titleStyle: {
    fontWeight: '100',
  },
};

export const Input = {
  errorStyle: {
    fontSize: 12,
    fontWeight: '100',
    color: colors.error,
  },
  labelStyle: {
    fontSize: 12,
  },
  containerStyle: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  inputContainerStyle: {},
};

export const Text = {
  style: {
    fontWeight: '100',
  },
};

export const theme = {
  colors,
  Avatar,
  Badge,
  Button,
  ButtonGroup,
  Card,
  Input,
  Text,
};
