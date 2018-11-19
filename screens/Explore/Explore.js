import React from 'react';
import { View } from 'react-native';
import { Text, Icon, Header } from 'react-native-elements';
import { colors } from '../../config/theme';
import { style, styles } from './Explore.styles';
import { ExploreHeader } from '../../components';

class Explore extends React.Component {
  static navigationOptions = {
    title: 'Explore',
    header: null,
  };

  render() {
    return (
      <View>
        <ExploreHeader />
        <Text>Explore</Text>
      </View>
    );
  }
}

export default Explore;
