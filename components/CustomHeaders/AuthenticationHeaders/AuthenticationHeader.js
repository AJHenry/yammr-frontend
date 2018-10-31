import React from 'react';
import { Header, Icon } from 'react-native-elements';
import { View, Platform } from 'react-native';
import { colors } from '../../../config/theme';

const AuthenticationHeader = ({ navigation }) => {
  console.log(navigation);
  return (
    <Header
      containerStyle={{
        marginTop: Platform.OS == 'ios' ? 20 : 0,
        marginBottom: -70,
        backgroundColor: colors.transparent,
      }}
      placement="left"
      leftComponent={<Icon name="arrow-back" />}
      centerComponent={{ text: navigation.title }}
    />
  );
};

export default AuthenticationHeader;
