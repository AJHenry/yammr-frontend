import React from 'react';
import { Icon, Header, ButtonGroup } from 'react-native-elements';
import { colors } from '../../../config/theme';

export class FeedHeader extends React.Component {
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
