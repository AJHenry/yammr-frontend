import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import { styles, style } from './BottomComment.styles';
import { Icon } from 'react-native-elements';
import { LargeInput } from '../index';

export const BottomComment = props => {
  const { cameraHandler, commentHandler, handleInputChange, value } = props;
  return (
    <View style={styles.comment}>
      <Icon
        iconStyle={style.extraButton}
        type="simple-line-icon"
        name="camera"
        onPress={() => cameraHandler()}
        component={TouchableHighlight}
      />
      <LargeInput
        style={styles.commentInput}
        placeholder="Say something.."
        onChange={handleInputChange}
        value={value}
      />
      <Icon
        iconStyle={style.commentButton}
        type="simple-line-icon"
        name="paper-plane"
        onPress={() => commentHandler()}
        component={TouchableHighlight}
      />
    </View>
  );
};
