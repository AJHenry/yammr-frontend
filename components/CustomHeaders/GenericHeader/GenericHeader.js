import React from 'react';
import { Text, Icon, Header, ButtonGroup } from 'react-native-elements';
import { colors } from '../../../config/theme';
import { style, styles } from './GenericHeader.styles';

export class GenericHeader extends React.Component {
  render() {
    const { title, right, left } = this.props;
    return (
      <Header
        containerStyle={style.containerStyle}
        centerComponent={
          title ? <Text style={style.titleStyle}>{title}</Text> : null
        }
        {...this.props}
      />
    );
  }
}
