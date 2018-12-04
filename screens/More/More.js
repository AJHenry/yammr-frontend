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
import { GenericHeader, Modal } from '../../components';

import userService from '../../services/user.service';

class More extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDeletePopUp: false,
    };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'More',
      header: null,
    };
  };

  showDeletePopUp = () => {
    const { showDeletePopUp } = this.state;
    return (
      <Modal
        middle
        isVisible={showDeletePopUp}
        onBackdropPress={this.toggleDeletePopUp}
        onBackButtonPress={this.toggleDeletePopUp}
      >
        <View
          style={{
            padding: 10,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Text
            style={{
              color: colors.black,
              fontSize: 20,
            }}
          >
            Delete Account
          </Text>
          <Text
            style={{
              color: colors.danger,
              fontSize: 16,
              margin: 10,
              textAlign: 'center',
            }}
          >
            This action is irreversible and your data will be lost!
          </Text>
          <Button
            title="Delete"
            buttonStyle={{
              backgroundColor: colors.danger,
            }}
            onPress={this.deleteAccount}
          />

          <Button
            title="Cancel"
            buttonStyle={{
              backgroundColor: colors.grey,
            }}
            onPress={this.toggleDeletePopUp}
          />
        </View>
      </Modal>
    );
  };

  toggleDeletePopUp = () => {
    this.setState({
      showDeletePopUp: !this.state.showDeletePopUp,
    });
  };

  deleteAccount = async () => {
    console.log('More Screen: Delete account clicked');
    await userService.deleteAccount();
  };

  _signOutAsync = async () => {
    const userToken = await userService.logout();
    if (!userToken) this.props.screenProps.rootNavigation.navigate('Auth');
  };

  render() {
    const popUp = this.showDeletePopUp();

    return (
      <React.Fragment>
        <View>
          <GenericHeader title="More" />
          <View style={styles.listContainer}>
            <ListItem
              containerStyle={style.listItemContainer}
              key={1}
              leftIcon={
                <Icon
                  type="simple-line-icon"
                  name="logout"
                  color={colors.grey}
                />
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
              onPress={this.toggleDeletePopUp}
            />
          </View>
        </View>
        {popUp}
      </React.Fragment>
    );
  }
}

export default More;
