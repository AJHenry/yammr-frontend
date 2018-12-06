import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  TouchableNativeFeedback,
} from 'react-native';
import {
  Avatar,
  Button,
  Text,
  CheckBox,
  Input,
  Icon,
  ListItem,
  Divider,
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
      <View style={styles.mainContainer}>
        <ListItem
          containerStyle={style.listItemContainer}
          key={1}
          leftIcon={
            <Avatar
              size="medium"
              rounded
              iconStyle={{
                backgroundColor: colors.transparent,
              }}
              source={{ uri: 'http://www.pitt.edu/~jwheeler/Pitt%20Logo.gif' }}
            />
          }
          rightIcon={
            <Icon
              type="simple-line-icon"
              name="arrow-right"
              color={colors.grey}
            />
          }
          title="University of Pittsburgh"
          titleStyle={{
            fontSize: 16,
          }}
        />
        <Divider />
        <ListItem
          containerStyle={style.listItemContainer}
          key={2}
          leftIcon={
            <Avatar
              size="medium"
              rounded
              iconStyle={{
                backgroundColor: colors.transparent,
              }}
              avatarStyle={{
                backgroundColor: colors.transparent,
              }}
              source={{
                uri: 'http://a.espncdn.com/i/teamlogos/ncaa/500/213.png',
              }}
            />
          }
          rightIcon={
            <Icon
              type="simple-line-icon"
              name="arrow-right"
              color={colors.grey}
            />
          }
          title="Penn State University"
          titleStyle={{
            fontSize: 16,
          }}
        />
      </View>
    );
  }
}

export default List;
