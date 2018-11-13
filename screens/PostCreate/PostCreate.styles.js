import { StyleSheet } from 'react-native';
import { colors } from '../../config/theme';

export const style = {
  mainContainer: {
    height: '100%',
    backgroundColor: colors.white,
  },
  inputContainer: {
    fontSize: 18,
    minHeight: 100,
    textAlignVertical: 'top',
  },
};

export const styles = StyleSheet.create(style);
