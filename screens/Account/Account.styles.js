import { StyleSheet } from 'react-native';
import { colors } from '../../config/theme';

export const style = {
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  userContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  userNameStyle: {
    color: colors.black,
    fontSize: 20,
  },
  feedContainer: {
    flex: 1,
  },
  changeNameButton: {
    backgroundColor: colors.primary,
    height: 25,
  },
};

export const styles = StyleSheet.create(style);
