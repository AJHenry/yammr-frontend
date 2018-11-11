import React from 'react';
import { TextInput, View } from 'react-native';

export const LargeInput = props => {
  const { inputStyle, containerStyle } = props;
  return (
    <View style={containerStyle}>
      <TextInput style={inputStyle} />
    </View>
  );
};
