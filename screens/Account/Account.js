import React from 'react';
import { View } from 'react-native';
import { Text, Icon, Header } from 'react-native-elements';
import { colors } from '../../config/theme';
import { style, styles } from './Account.styles';

class Account extends React.Component {
  static navigationOptions = {
    title: 'Account',
  };

  render() {
    return <Text>Account</Text>;
  }
}

export default Account;
