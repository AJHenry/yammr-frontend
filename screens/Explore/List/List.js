import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  TouchableNativeFeedback,
} from 'react-native';
import {
  Button,
  Text,
  CheckBox,
  Input,
  Icon,
  ListItem,
} from 'react-native-elements';
import { styles, style } from './List.styles';
import { colors } from '../../../config/theme';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'List',
      header: null,
    };
  };

  render() {
    return (
      <View>
        <Text>Hello from List</Text>
      </View>
    );
  }
}

export default List;
