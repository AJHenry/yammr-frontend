import { StyleSheet } from 'react-native';
import { colors } from '../../config/theme';

export const style = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelStyle: {
    color: colors.secondary,
  },
  registerButton: {
    backgroundColor: colors.secondary,
  },
  inputContainer: {
    width: 340,
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
