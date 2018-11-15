import { StyleSheet } from 'react-native';
import { colors } from '../../config/theme';

export const style = {
  container: {
    margin: 5,
  },
  inputContainer: {
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 2,
    paddingBottom: 2,
    borderWidth: 1,
    borderColor: colors.muted,
  },
  label: {
    color: colors.black,
    fontSize: 14,
    marginBottom: 5,
  },
  error: {
    color: colors.error,
    marginLeft: 3,
    fontSize: 12,
  },
};

export const styles = StyleSheet.create(style);
