import { StyleSheet } from 'react-native';
import { colors } from '../../config/theme';

export const style = {
  mainContainer: {
    flex: 1,
  },
  aboveContainer: {
    margin: 0, // Currently unused
  },
  belowContainer: {},
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingBottom: 50,
    backgroundColor: colors.white,
  },
  postContainer: {
    paddingTop: 15,
    paddingLeft: 15,
    maxWidth: '80%',
  },
  sideContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 20,
    padding: 5,
  },
  contentStyle: {
    fontSize: 18,
  },
  commentContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  commentHeader: {
    marginLeft: 10,
    fontSize: 12,
    color: colors.grey,
    backgroundColor: colors.white,
  },
  commentFeed: {
    marginBottom: 50,
    backgroundColor: colors.background,
  },
};

export const styles = StyleSheet.create(style);
