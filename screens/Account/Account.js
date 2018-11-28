import React from 'react';
import { View } from 'react-native';
import { Text, Icon, Header, Button } from 'react-native-elements';
import { colors } from '../../config/theme';
import { style, styles } from './Account.styles';
import { GenericHeader } from '../../components';

import { userActions } from '../../actions/user.actions';
import { userService } from '../../services';

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
        <GenericHeader title="ACCOUNT" />
        <Text>Account</Text>
      </View>
    );
  }
}

export default Account;
