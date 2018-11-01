import { StyleSheet } from 'react-native';
import { colors } from '../../config/theme';

export const style = {
  labelStyle: {
    flex: 1,
    alignItems: 'center',
  },
  headerStyle: {
    elevation: 0,
    backgroundColor: colors.primary,
  },
  tabNavigatorStyle: {
    backgroundColor: colors.light,
    elevation: 0,
    borderBottomWidth: 1,
    borderBottomColor: colors.muted,
  },
  indicatorStyle: {
    backgroundColor: colors.transparent,
  },
  tabStyle: {},
  feedSelector: {
    height: 50,
    width: '100%',
  },
};

export const styles = StyleSheet.create(style);
