import React from 'react';
import { View, TouchableNativeFeedback } from 'react-native';
import { Icon, Header, ButtonGroup } from 'react-native-elements';
import { colors } from '../../../config/theme';
import { style, styles } from './PostViewHeader.styles';

export class PostViewHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  goBack = () => {
    const { goBack } = this.props;
    if (goBack) {
      goBack();
    } else {
      console.error(
        `Warning: goBack handler called on PostViewHeader without being passed a goBack prop`
      );
    }
  };

  menuHandler = () => {
    const { menuHandler } = this.props;
    if (menuHandler) {
      menuHandler();
    } else {
      console.error(
        `Warning: menuHandler called on PostViewHeader without being passed a menuHandler prop`
      );
    }
  };

  render() {
    const { selectedIndex } = this.state;
    const { goBack } = this.props;

    return (
      <Header
        containerStyle={{
          borderBottomWidth: 1,
          borderBottomColor: colors.muted,
        }}
        leftComponent={
          <TouchableNativeFeedback onPress={() => this.goBack()}>
            <View>
              <Icon
                type="simple-line-icon"
                name="arrow-left"
                color={colors.white}
              />
            </View>
          </TouchableNativeFeedback>
        }
        rightComponent={
          <TouchableNativeFeedback onPress={() => this.menuHandler()}>
            <View>
              <Icon
                type="simple-line-icon"
                name="options-vertical"
                color={colors.white}
              />
            </View>
          </TouchableNativeFeedback>
        }
      />
    );
  }
}
