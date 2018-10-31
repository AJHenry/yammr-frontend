import React from 'react';
import { View } from 'react-native';
import { Text, Icon, Header } from 'react-native-elements';
import { colors } from '../../config/theme';
import { style, styles } from './Explore.styles';

class Explore extends React.Component {
  static navigationOptions = {
    title: 'Explore Layout',
  };

  render() {
    return <Text>Explore</Text>;
  }
}

export default Explore;
