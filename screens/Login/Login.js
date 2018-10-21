import React from 'react';
import { View, KeyboardAvoidingView } from 'react-native';
import { Button, Text, Header, Input, Icon } from 'react-native-elements';
import { withTheme } from 'react-native-elements';
import { styles, style } from './Login.styles';
import { colors } from '../../config/theme';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text style={styles.header}>Log In</Text>
        <View style={styles.inputContainer}>
          <Input
            label="EMAIL"
            labelStyle={{ color: colors.primary }}
            placeholder="Email"
          />
          <Input
            placeholder="Password"
            labelStyle={{ color: colors.primary }}
            label="PASSWORD"
            secureTextEntry
          />
        </View>
        <Text style={styles.forgotPassword}>Forgot your password?</Text>
        <Button buttonStyle={style.loginButton} title="LOG IN" />
      </KeyboardAvoidingView>
    );
  }
}

export default Login;
