import React from 'react';
import { View, KeyboardAvoidingView } from 'react-native';
import { Button, Text, CheckBox, Input, Icon } from 'react-native-elements';
import { styles, style } from './More.styles';
import { colors } from '../../config/theme';

class More extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'More',
    };
  };

  render() {
    return (
      <View>
        <Text>More</Text>
      </View>
    );
  }
}

export default More;
