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

    this.handleInputChange = this.handleInputChange.bind(this);
    this.commentHandler = this.commentHandler.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    console.log(`${name}, ${value}`);

    this.setState({
      [name]: value,
    });
  }

  /**
   * Used for handling comment button
   */
  commentHandler() {
    console.log(`Comment Handler, comment data: ${this.state.comment}`);
  }

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
          onPress={() => this.cameraHandler()}
          component={TouchableHighlight}
        />
        <LargeInput
          style={styles.commentInput}
          placeholder="Say something.."
          onChangeText={text => this.setState({ comment: text })}
        />
        <Icon
          iconStyle={style.commentButton}
          type="simple-line-icon"
          name="paper-plane"
          onPress={() => this.commentHandler()}
          component={TouchableHighlight}
        />
      </View>
    );
  }
}
