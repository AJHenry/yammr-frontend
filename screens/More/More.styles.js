import { StyleSheet } from 'react-native';
import { colors } from '../../config/theme';

export const style = {
  container: {},
  listItemContainer: {
    borderBottomWidth: 0.5,
    borderBottomColor: colors.muted,
  },
  listContainer: {
    height: '100%',
    backgroundColor: colors.background,
  },
};

export const styles = StyleSheet.create(style);
