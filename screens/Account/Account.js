import React from 'react';
import { View } from 'react-native';
import { Text, Icon, Header, Button } from 'react-native-elements';
import { colors } from '../../config/theme';
import { style, styles } from './Account.styles';

import { userActions } from '../../actions/user.actions';
import { userService } from '../../services';

class Account extends React.Component {
  static navigationOptions = {
    title: 'Account',
  };

  constructor(props) {
    super(props);
  }

  _signOutAsync = async () => {
    const { dispatch } = this.props.navigation;
    dispatch(userActions.logout());
    const userToken = await userService.getUser();
    if (!userToken) this.props.screenProps.rootNavigation.navigate('Auth');
  };

  render() {
    return (
      <View>
        <Text>Account</Text>
        <Button
          buttonStyle={style.loginButton}
          onPress={this._signOutAsync}
          title="LOG OUT"
        />
      </View>
    );
  }
}

export default Account;
