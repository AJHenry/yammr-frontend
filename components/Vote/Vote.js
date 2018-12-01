import React from 'react';
import { View } from 'react-native';
import {
  Text,
  Icon,
  Header,
  ButtonGroup,
  ListItem,
} from 'react-native-elements';
import { colors } from '../../config/theme';
import { style, styles } from './Vote.styles';
import TouchablePlatformSpecific from '../index';

export class Vote extends React.Component {
  constructor(props) {
    super(props);
  }

  handleScore = type => {
    let { voteHandler, postId, voteType, score } = this.props;

    //console.log(`Vote score before: ${postId}, ${voteType}, ${score}`);
    switch (type) {
      case 'up':
        console.log('Upvote');
        if (voteType === 'down') {
          voteType = 'up';
          score = score + 2;
          break;
        }

        if (voteType === 'up') {
          voteType = null;
          score = score - 1;
          break;
        }
        if (voteType == null) {
          voteType = 'up';
          score = score + 1;
          break;
        }
        break;

      case 'down':
        console.log('Downvote');
        if (voteType === 'up') {
          voteType = 'down';
          score = score - 2;
          break;
        }
        if (voteType === 'down') {
          voteType = null;
          score = score + 1;
          break;
        }
        if (voteType == null) {
          voteType = 'down';
          score = score - 1;
          break;
        }
        break;
    }

    //console.log(`Vote after: ${postId}, ${voteType}, ${score}`);
    // Callback to parent to handle the vote action
    if (voteHandler) {
      voteHandler(postId, voteType, score);
    } else {
      console.log(
        `Warning: voteHandler called on Vote without being passed a voteHandler prop`
      );
    }
  };

  render() {
    const { voteType, score } = this.props;
    return (
      <View style={styles.container}>
        <Icon
          component={TouchablePlatformSpecific}
          iconStyle={
            voteType === 'up' ? [style.vote, style.upvote] : style.vote
          }
          type="ionicon"
          name="ios-arrow-up"
          onPress={() => this.handleScore('up')}
        />
        <Text style={style.scoreStyle}>{score}</Text>
        <Icon
          component={TouchablePlatformSpecific}
          iconStyle={
            voteType === 'down' ? [style.vote, style.downvote] : style.vote
          }
          type="ionicon"
          name="ios-arrow-down"
          onPress={() => this.handleScore('down')}
        />
      </View>
    );
  }
}
