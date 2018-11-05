import React from 'react';
import { FlatList, View } from 'react-native';
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

const CustomTextItem = ({ score, text }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>{text}</Text>
      </View>
      <View style={styles.voteContainer}>
        <Vote score={score} />
      </View>
    </View>
  );
};

export const FeedItem = props => {
  const { postId, postType, text, image, score } = props;

  switch (postType) {
    case 'image':
      return <ListItem rightElement={<Vote score={score} />} />;
    case 'text':
      return <ListItem title={text} />;
    default:
      return <CustomTextItem score={score} text={text} />;
  }
};
