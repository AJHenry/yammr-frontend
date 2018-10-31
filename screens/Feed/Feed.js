import React from 'react';
import { View } from 'react-native';
import { Text, Icon, Header } from 'react-native-elements';
import { colors } from '../../config/theme';
import { style, styles } from './Feed.styles';
import AuthenticationHeader from '../../components/CustomHeaders/AuthenticationHeaders/AuthenticationHeader';

class Feed extends React.Component {
  static navigationOptions = {
    title: 'Feed',
  };

  render() {
    return (
      <React.Fragment>
        <Text>Feed</Text>
      </React.Fragment>
    );
  }
}

export default Feed;
