import { StyleSheet } from 'react-native';
import { colors } from '../../config/theme';

export const style = {
  loadingContainer: {
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'center',
  },
  footer: {
    borderWidth: 0,
    margin: 20,
  },
};

export const styles = StyleSheet.create(style);
