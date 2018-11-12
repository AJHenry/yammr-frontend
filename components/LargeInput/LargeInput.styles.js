import { StyleSheet } from 'react-native';
import { colors } from '../../config/theme';

export const style = {
  inputContainer: {
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 2,
    paddingBottom: 2,
    borderWidth: 1,
    borderColor: colors.muted,
    margin: 5,
  },
};

export const styles = StyleSheet.create(style);
