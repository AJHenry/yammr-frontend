import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import { styles, style } from './BottomComment.styles';
import { Icon } from 'react-native-elements';
import { LargeInput } from '../index';

export class BottomComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: null,
    };
  }

  /**
   * Used for handling comment button
   */
  commentHandler = () => {
    console.log(`Comment Handler, comment data: ${this.state.comment}`);
  };

  /**
   * Used for handling camera button
   */
  cameraHandler = () => {
    console.log(`Camera Handler`);
  };

  render() {
    return (
      <View style={styles.comment}>
        <Icon
          iconStyle={style.extraButton}
          type="simple-line-icon"
          name="camera"
          onPress={this.cameraHandler}
          component={TouchableHighlight}
        />
        <LargeInput
          inputStyle={styles.commentInput}
          containerStyle={styles.commentContainer}
          placeholder="Say something.."
          onChangeText={text => this.setState({ comment: text })}
        />
        <Icon
          iconStyle={style.commentButton}
          type="font-awesome"
          name="send-o"
          onPress={this.commentHandler}
          component={TouchableHighlight}
        />
      </View>
    );
  }
}
