import React from 'react';
import { FlatList, View, TouchableNativeFeedback } from 'react-native';
import {
  Text,
  Icon,
  Header,
  ButtonGroup,
  ListItem,
} from 'react-native-elements';
import { colors } from '../../config/theme';
import { style, styles } from './FeedItem.styles';
import { Vote } from '../Vote/Vote';
import { getTimeAgo } from '../../config/helpers';

const CustomTextItem = ({
  postId,
  score,
  text,
  timestamp,
  replyCount,
  clickHandler,
}) => {
  onPress = () => {
    console.log('Post Clicked');
    clickHandler(postId);
  };

  return (
    <TouchableNativeFeedback
      onPress={this._onPressButton}
      onPress={() => this.onPress()}
    >
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.textStyle}>{text}</Text>
          </View>
          <View style={styles.voteContainer}>
            <Vote score={score} />
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

export const FeedItem = props => {
  const {
    postId,
    postType,
    postTime,
    text,
    image,
    score,
    replyCount,
    clickHandler,
  } = props;

  switch (postType) {
    case 'image':
      return <ListItem rightElement={<Vote score={score} />} />;
    case 'text':
    case 'video':
    default:
      return (
        <CustomTextItem
          postId={postId}
          score={score}
          text={text}
          timestamp={postTime}
          replyCount={replyCount}
          clickHandler={clickHandler}
        />
      );
  }
};
