import { StyleSheet } from 'react-native';
import { colors } from '../../config/theme';

export const style = {
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
    color: colors.primary,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 10,
    paddingLeft: 10,
    marginRight: 10,
  },
  extraButton: {
    color: colors.grey,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 10,
    paddingLeft: 12,
  },
};

export const styles = StyleSheet.create(style);
