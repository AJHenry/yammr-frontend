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

const CustomTextItem = ({ score, text, timestamp }) => {
  onPress = () => {
    console.log('Post Clicked');
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
            <Text style={style.bottomTextStyle}>15 mins</Text>
          </View>
          <View>
            <Text style={style.bottomTextStyle}>2 replies</Text>
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
