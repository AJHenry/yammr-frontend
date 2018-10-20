import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Button, Text, Header, Input, Icon } from 'react-native-elements';
import { withTheme } from 'react-native-elements';
import { styles, style } from './Login.styles';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { colors } = this.props.theme;
    return (
      <ScrollView contentContainerStyle={styles.container}>
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
      </ScrollView>
    );
  }
}

export default withTheme(Login);
