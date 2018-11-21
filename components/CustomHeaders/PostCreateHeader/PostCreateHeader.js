import React from 'react';
import { View } from 'react-native';
import { Icon, Header, ButtonGroup } from 'react-native-elements';
import { colors } from '../../../config/theme';
import { style, styles } from './PostCreateHeader.styles';
import { TouchablePlatformSpecific } from '../../index';

export class PostCreateHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  goBack = () => {
    const { goBack } = this.props;
    if (goBack) {
      goBack();
    } else {
      console.log(
        `Warning: goBack handler called on PostViewHeader without being passed a goBack prop`
      );
    }
  };

  render() {
    return (
      <Header
        containerStyle={style.containerStyle}
        leftComponent={
          <TouchablePlatformSpecific onPress={() => this.goBack()}>
            <View>
              <Icon
                type="simple-line-icon"
                name="arrow-left"
                color={colors.white}
              />
            </View>
          </TouchablePlatformSpecific>
        }
      />
    );
  }
}
