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
import { styles, style } from './Map.styles';
import { colors } from '../../../config/theme';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Map',
      header: null,
    };
  };

  render() {
    return (
      <View>
        <Text>Hello from Map</Text>
      </View>
    );
  }
}

export default Map;
