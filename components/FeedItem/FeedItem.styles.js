import { StyleSheet } from 'react-native';
import { colors } from '../../config/theme';

export const style = {
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    padding: 10,
    paddingLeft: 15,
    backgroundColor: colors.white,
    marginTop: 2,
    marginBottom: 2,
    borderTopColor: colors.muted,
    borderBottomColor: colors.muted,
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
  textContainer: {
    width: '80%',
    paddingTop: 5,
  },
  textStyle: {
    fontSize: 18,
  },
  voteContainer: {
    width: '20%',
  },
};

export const styles = StyleSheet.create(style);
