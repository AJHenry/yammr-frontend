import { StyleSheet } from 'react-native';
import { colors } from '../../config/theme';

export const style = {
  loadingContainer: {
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: 'center',
  },
  footer: {
    borderWidth: 0,
    margin: 20,
  },
  flatListStyle: {
    backgroundColor: colors.background,
  },
};

export const styles = StyleSheet.create(style);
