import { StyleSheet } from 'react-native';
import { colors } from '../../../config/theme';

export const style = {
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    padding: 10,
    backgroundColor: colors.white,
    marginTop: 2,
    marginBottom: 2,
    borderTopColor: colors.muted,
    borderBottomColor: colors.muted,
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  textContainer: {
    left: 0,
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    maxWidth: '80%',
  },
  textStyle: {
    fontSize: 18,
  },
  voteContainer: {
    marginLeft: 10,
    marginRight: 10,
    padding: 5,
  },
  bottomContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 10,
  },
  timeContainer: {},
  replyContainer: {},
  extraContainer: {
    width: 10,
  },
  bottomTextStyle: {
    color: colors.grey,
  },
};

export const styles = StyleSheet.create(style);
