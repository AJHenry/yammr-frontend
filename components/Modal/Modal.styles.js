import { StyleSheet } from 'react-native';
import { colors } from '../../config/theme';

export const style = {
  containerStyle: {
    height: 'auto',
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 0,
    marginBottom: 0,
  },
  viewContainer: {
    backgroundColor: colors.white,
  },
};

export const styles = StyleSheet.create(style);
