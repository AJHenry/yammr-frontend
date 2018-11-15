import { StyleSheet } from 'react-native';
import { colors } from '../../config/theme';

export const style = {
  mainContainer: {
    height: '100%',
    backgroundColor: colors.white,
    padding: 15,
  },
  inputContainer: {
    fontSize: 18,
    minHeight: 100,
    textAlignVertical: 'top',
    borderWidth: 2,
  },
  inputLabel: {
    color: colors.grey,
    paddingLeft: 5,
    fontSize: 12,
  },
  iconContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    height: 'auto',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: 5,
  },
  icon: {
    color: colors.grey,
    fontSize: 26,
    paddingLeft: 5,
    paddingRight: 5,
  },
  buttonStyle: {},
  containerStyle: {
    marginTop: 40,
  },
};

export const styles = StyleSheet.create(style);
