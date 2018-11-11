import { StyleSheet } from 'react-native';
import { colors } from '../../config/theme';

export const style = {
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
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
  },
  commentHeader: {
    marginLeft: 10,
    fontSize: 12,
    color: colors.grey,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopColor: colors.muted,
    borderTopWidth: 1,
    backgroundColor: colors.white,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  commentInput: {
    flex: 1,
  },
  commentButton: {
    flex: 1,
    minWidth: 0,
    width: 100,
  },
};

export const styles = StyleSheet.create(style);
