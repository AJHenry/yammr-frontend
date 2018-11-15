import React from 'react';
import {
  Image,
  View,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native';
import {
  Text,
  Icon,
  Header,
  ButtonGroup,
  ListItem,
} from 'react-native-elements';
import { style, styles } from './ImageItem.styles';
import { Vote } from '../../Vote/Vote';
import { getTimeAgo } from '../../../config/helpers';

export const ImageItem = ({
  postId,
  score,
  text,
  imageSrc,
  timestamp,
  replyCount,
  clickHandler,
}) => {
  onPress = () => {
    console.log('Post Clicked');
    clickHandler(postId);
  };

  let TouchablePlatformSpecific =
    Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;

  return (
    <TouchablePlatformSpecific
      onPress={this._onPressButton}
      onPress={() => this.onPress()}
    >
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image style={styles.imageStyle} source={imageSrc} />
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
    </TouchablePlatformSpecific>
  );
};
