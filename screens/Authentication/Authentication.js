import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import { Button, Text, Header, Input, Icon } from 'react-native-elements';
import { withTheme } from 'react-native-elements';
import { styles, style } from './Authentication.styles';
import { createStackNavigator } from 'react-navigation';
import { colors } from '../../config/theme';

class Authentication extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;

    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text style={styles.header} h1>
          Gib Gab
        </Text>

        <Button
          buttonStyle={style.registerButton}
          title="LOG IN"
          onPress={() => navigation.navigate('Login')}
        />
        <Button
          buttonStyle={{ backgroundColor: colors.red }}
          title="REGISTER"
          onPress={() => navigation.navigate('Register')}
        />
      </KeyboardAvoidingView>
    );
  }
}

export default Authentication;
