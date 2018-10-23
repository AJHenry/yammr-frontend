import { StyleSheet } from 'react-native';
import { colors } from '../../config/theme';

export const style = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelStyle: {
    color: colors.primary,
  },
  loginButton: {
    backgroundColor: colors.primary,
  },
  inputContainer: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  forgotPassword: {
    padding: 5,
  },
  header: {
    fontSize: 30,
    marginBottom: 20,
  },
};

export const styles = StyleSheet.create(style);
