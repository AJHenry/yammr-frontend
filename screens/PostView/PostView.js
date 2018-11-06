import React from 'react';
import { View } from 'react-native';
import { Text, Icon, Header } from 'react-native-elements';
import { colors } from '../../config/theme';
import { style, styles } from './PostView.styles';

class PostView extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'PostView',
      headerStyle: {
        backgroundColor: colors.transparent,
      },
      headerBackImage: (
        <Icon type="ionicons" name="arrow-back" title="Info" size={28} />
      ),
    };
  };

  render() {
    const { navigation } = this.props;
    const postId = navigation.getParam('postId', '0');

    return <Text>PostID: {postId}</Text>;
  }
}

export default PostView;
