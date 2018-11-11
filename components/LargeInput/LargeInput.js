import React from 'react';
import { TextInput } from 'react-native';
export const LargeInput = props => {
  const { inputStyle } = props;
  return <TextInput style={inputStyle} />;
};
