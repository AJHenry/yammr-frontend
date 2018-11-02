import React from 'react';
import { Text, Icon, Header, ButtonGroup } from 'react-native-elements';
import { colors } from '../../config/theme';
import { style, styles } from './Feed.styles';
import AuthenticationHeader from '../../components/CustomHeaders/AuthenticationHeaders/AuthenticationHeader';

class FeedHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 1,
    };
    this.updateIndex = this.updateIndex.bind(this);
    this.compose = this.compose.bind(this);
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
    this.props.feedHandler(selectedIndex);
  }

  compose() {
    this.props.composeHandler();
  }

  render() {
    const buttons = ['New', 'Top', 'Hot'];
    const { selectedIndex } = this.state;
    const { composeHandler } = this.props;

    return (
      <Header
        containerStyle={{
          borderBottomWidth: 1,
          borderBottomColor: colors.muted,
        }}
        centerComponent={
          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            selectedButtonStyle={{
              backgroundColor: colors.white,
            }}
            selectedTextStyle={{
              color: colors.primary,
            }}
            textStyle={{
              color: colors.white,
              fontSize: 14,
            }}
            buttonStyle={{
              backgroundColor: colors.primary,
            }}
            containerStyle={{
              height: 35,
            }}
          />
        }
        rightComponent={
          <Icon
            type="simple-line-icon"
            name="note"
            color={colors.white}
            onPress={this.compose}
          />
        }
      />
    );
  }
}

class Feed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'Top Feed',
    };

    this.composeHandle = this.composeHandle.bind(this);
    this.feedHandler = this.feedHandler.bind(this);
  }

  static navigationOptions = {
    header: null,
  };

  composeHandle() {
    console.log('Compose Handler');
  }

  feedHandler(index) {
    console.log('Feed Handler');
    console.log(`Index Selected : ${index}`);

    switch (index) {
      case 0:
        this.setState({
          text: 'New Feed',
        });
        break;
      case 1:
        this.setState({
          text: 'Top Feed',
        });
        break;
      case 2:
        this.setState({
          text: 'Hot Feed',
        });
        break;
      default:
        console.log('severe error');
    }
  }

  render() {
    return (
      <React.Fragment>
        <FeedHeader
          composeHandler={this.composeHandle}
          feedHandler={this.feedHandler}
        />
        <Text>{this.state.text}</Text>
      </React.Fragment>
    );
  }
}

export default Feed;
