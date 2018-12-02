import React from 'react';
import { View } from 'react-native';
import { Text, Icon, Header, Button } from 'react-native-elements';
import { colors } from '../../config/theme';
import { style, styles } from './Account.styles';
import { GenericHeader } from '../../components';

class Account extends React.Component {
  static navigationOptions = {
    title: 'Account',
    header: null,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <GenericHeader title="Account" />
        <Text>Account</Text>
      </View>
    );
  }
}

export default Account;
