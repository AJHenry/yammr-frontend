import { StyleSheet } from 'react-native';
import { colors } from '../../../config/theme';

export const style = {
  containerStyle: {
    borderBottomWidth: 1,
    borderBottomColor: colors.muted,
  },
  titleStyle: {
    color: colors.white,
    fontSize: 20,
  },
};

export const styles = StyleSheet.create(style);
