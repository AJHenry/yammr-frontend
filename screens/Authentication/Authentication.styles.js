import { StyleSheet } from 'react-native';
import { colors } from '../../config/theme';

export const style = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -50,
  },
  loginButton: {
    backgroundColor: colors.primary,
  },
  registerButton: {
    backgroundColor: colors.secondary,
  },
  inputContainer: {
    width: '80%',
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
