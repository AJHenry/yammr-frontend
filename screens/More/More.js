import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  TouchableNativeFeedback,
} from 'react-native';
import {
  Button,
  Text,
  CheckBox,
  Input,
  Icon,
  ListItem,
} from 'react-native-elements';
import { styles, style } from './More.styles';
import { colors } from '../../config/theme';
import { GenericHeader } from '../../components';

import { userActions } from '../../actions/user.actions';
import { userService } from '../../services';

class More extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'More',
      header: null,
    };
  };

  deleteAccount = () => {
    console.log('More Screen: Delete account clicked');
  };

  _signOutAsync = async () => {
    const { dispatch } = this.props.navigation;
    dispatch(userActions.logout());
    const userToken = await userService.getUser();
    if (!userToken) this.props.screenProps.rootNavigation.navigate('Auth');
  };

  render() {
    return (
      <View>
        <GenericHeader title="MORE" />
        <View style={styles.listContainer}>
          <ListItem
            containerStyle={style.listItemContainer}
            key={1}
            leftIcon={
              <Icon type="simple-line-icon" name="logout" color={colors.grey} />
            }
            rightIcon={
              <Icon
                type="simple-line-icon"
                name="arrow-right"
                color={colors.grey}
              />
            }
            title="Log Out"
            onPress={this._signOutAsync}
          />
          <ListItem
            containerStyle={style.listItemContainer}
            key={2}
            leftIcon={
              <Icon
                type="simple-line-icon"
                name="close"
                color={colors.danger}
              />
            }
            rightIcon={
              <Icon
                type="simple-line-icon"
                name="arrow-right"
                color={colors.grey}
              />
            }
            title="Delete Account"
            onPress={this.deleteAccount}
          />
        </View>
      </View>
    );
  }
}

export default More;
