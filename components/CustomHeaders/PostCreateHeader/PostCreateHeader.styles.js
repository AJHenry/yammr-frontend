import { StyleSheet } from 'react-native';
import { colors } from '../../../config/theme';

export const style = {
  containerStyle: {
    backgroundColor: colors.primary,
    borderBottomWidth: 1,
    borderBottomColor: colors.muted,
  },
  backContainer: {
    padding: 5,
    marginLeft: 5,
  },
  menuContainer: {},
};

export const styles = StyleSheet.create(style);
