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

class Authentication extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { colors } = this.props.theme;
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text style={styles.header} h1>
          Gib Gab
        </Text>

        <Button buttonStyle={style.registerButton} title="LOG IN" />
        <Button
          buttonStyle={{ backgroundColor: colors.red }}
          title="REGISTER"
        />
      </KeyboardAvoidingView>
    );
  }
}

export default withTheme(Authentication);
