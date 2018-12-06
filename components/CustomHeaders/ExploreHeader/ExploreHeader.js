import React from 'react';
import { Icon, Header, ButtonGroup, Text } from 'react-native-elements';
import { colors } from '../../../config/theme';
import { style, styles } from './ExploreHeader.styles';

export class ExploreHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  search = () => {
    const { searchHandler } = this.props;

    if (searchHandler) {
      searchHandler();
    } else {
      console.log(`No searchHandler passed as a prop to ExploreHeader`);
    }
  };

  render() {
    return (
      <Header
        containerStyle={style.containerStyle}
        centerComponent={<Text style={style.titleStyle}>Explore</Text>}
        rightComponent={
          <Icon
            type="simple-line-icon"
            name="magnifier"
            color={colors.white}
            onPress={this.search}
          />
        }
      />
    );
  }
}
