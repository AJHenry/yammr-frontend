import React from 'react';
import { View, TouchableNativeFeedback } from 'react-native';
import { Text } from 'react-native-elements';
import { style, styles } from './TextItem.styles';
import { Vote } from '../../Vote/Vote';
import { getTimeAgo } from '../../../config/helpers';

onPress = postId => {
  console.log('Post Clicked on id ' + postId);
  clickHandler(postId);
};

export const TextItem = ({
  postId,
  score,
  text,
  timestamp,
  replyCount,
  clickHandler,
  voteHandler,
  voteType,
}) => {
  return (
    <TouchableNativeFeedback onPress={() => this.onPress(postId)}>
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.textStyle}>{text}</Text>
          </View>
          <View style={styles.voteContainer}>
            <Vote
              score={score}
              voteHandler={voteHandler}
              postId={postId}
              voteType={voteType}
            />
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View>
            <Text style={style.bottomTextStyle}>{getTimeAgo(timestamp)}</Text>
          </View>
          <View>
            <Text style={style.bottomTextStyle}>
              {replyCount
                ? replyCount > 1
                  ? replyCount + ' replies'
                  : replyCount + ' reply'
                : null}
            </Text>
          </View>
          <View style={styles.extraContainer}>
            <Text style={style.bottomTextStyle} />
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};
