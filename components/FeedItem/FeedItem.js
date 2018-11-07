import React from 'react';
import { Image, View, TouchableNativeFeedback } from 'react-native';
import {
  Text,
  Icon,
  Header,
  ButtonGroup,
  ListItem,
} from 'react-native-elements';
import { colors } from '../../config/theme';
import { style, styles } from './FeedItem.styles';
import { ImageItem } from './ImageItem/ImageItem';
import { TextItem } from './TextItem/TextItem';

export const FeedItem = props => {
  const {
    postId,
    postType,
    postTime,
    text,
    imageSrc,
    score,
    replyCount,
    clickHandler,
  } = props;

  switch (postType) {
    case 'image':
      return (
        <ImageItem
          postId={postId}
          score={score}
          text={text}
          imageSrc={imageSrc}
          timestamp={postTime}
          replyCount={replyCount}
          clickHandler={clickHandler}
        />
      );
    case 'text':
    case 'video':
    default:
      return (
        <TextItem
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
