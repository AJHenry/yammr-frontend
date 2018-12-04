import React from 'react';
import { View } from 'react-native';
import {
  Text,
  Icon,
  Header,
  Button,
  Divider,
  Input,
} from 'react-native-elements';
import { colors } from '../../config/theme';
import { style, styles } from './Account.styles';
import { GenericHeader, FeedList, Modal } from '../../components';
import userService from '../../services/user.service';

class Account extends React.Component {
  static navigationOptions = {
    title: 'Account',
    header: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      feedItems: null,
      showUserPopUp: false,
      nameValue: null,
    };
  }

  togglePopUp = () => {
    this.setState({
      showUserPopUp: !this.state.showUserPopUp,
    });
  };

  showPopUp = () => {
    const { showUserPopUp, nameValue } = this.state;
    return (
      <Modal
        middle
        isVisible={showUserPopUp}
        onBackdropPress={this.togglePopUp}
        onBackButtonPress={this.togglePopUp}
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
            Enter New Name
          </Text>
          <Input
            placeholder="New Name"
            containerStyle={{
              marginVertical: 20,
            }}
            onChangeText={text => this.setState({ nameValue: text })}
            value={nameValue}
          />
          <Button
            title="Change"
            buttonStyle={{
              backgroundColor: colors.primary,
            }}
            onPress={this.changeNameHandler}
          />
        </View>
      </Modal>
    );
  };

  componentDidMount = async () => {
    console.log(`Account page mounted`);
    const posts = await userService.getUserFeed();
    if (posts.error) {
      this.setState({ feedItems: [] });
      return;
    }
    this.setState({ feedItems: posts });
  };

  changeNameHandler = () => {
    const { nameValue } = this.state;
    console.log(`Change name toggler clicked with value: ${nameValue}`);
  };

  render() {
    const { feedItems } = this.state;
    const popUp = this.showPopUp();
    return (
      <React.Fragment>
        <View style={styles.mainContainer}>
          <GenericHeader title="Account" />
          <View style={styles.userContainer}>
            <Text style={style.userNameStyle}>Andrew Dev Account</Text>
            <View
              style={{
                flexDirection: 'row',
              }}
            >
              <Button
                titleStyle={{ paddingVertical: 0 }}
                title="Change Name"
                buttonStyle={style.changeNameButton}
                onPress={this.togglePopUp}
              />
            </View>
          </View>
          <Text
            style={{
              fontSize: 14,
              color: colors.grey,
              marginHorizontal: 10,
            }}
          >
            YOUR POSTS
          </Text>
          <Divider />
          <View style={styles.feedContainer}>
            <FeedList data={feedItems} />
          </View>
        </View>
        {popUp}
      </React.Fragment>
    );
  }
}

export default Account;
