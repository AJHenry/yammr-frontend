import { StyleSheet } from 'react-native';
import { colors } from '../../config/theme';

export const style = {
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreStyle: {
    fontSize: 24,
    color: colors.grey,
  },
  vote: {
    color: colors.muted,
    fontSize: 42,
  },
  upvote: {
    color: colors.success,
  },
  downvote: {
    color: colors.danger,
  },
};

export const styles = StyleSheet.create(style);
