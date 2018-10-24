import React from 'react';
import { View, KeyboardAvoidingView } from 'react-native';
import { Button, Text, Header, Input, Icon } from 'react-native-elements';
import { styles, style } from './Login.styles';
import { colors } from '../../config/theme';

import { userActions } from '../../actions/user.actions';
import { userService } from '../../services';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.getUser = this.getUser.bind(this);
  }

  async login(e) {
    const { dispatch } = this.props.navigation;
    dispatch(userActions.login(this.state.email, this.state.password));
  }

  async logout(e) {
    const { dispatch } = this.props.navigation;
    dispatch(userActions.logout());
  }

  async getUser(e) {
    console.log(await userService.getUser());
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text style={styles.header}>Log In</Text>
        <View style={styles.inputContainer}>
          <Input
            label="EMAIL"
            onChangeText={text => this.setState({ ...this.state, email: text })}
            labelStyle={style.labelStyle}
            placeholder="Email"
          />
          <Input
            placeholder="Password"
            labelStyle={style.labelStyle}
            label="PASSWORD"
            onChangeText={text =>
              this.setState({ ...this.state, password: text })
            }
            secureTextEntry
          />
        </View>
        <Text style={styles.forgotPassword}>Forgot your password?</Text>
        <Button
          buttonStyle={style.loginButton}
          onPress={this.login}
          title="LOG IN"
        />

        <Button
          buttonStyle={style.loginButton}
          onPress={this.logout}
          title="LOG OUT"
        />

        <Button
          buttonStyle={style.loginButton}
          onPress={this.getUser}
          title="CHECK TOKEN"
        />
      </KeyboardAvoidingView>
    );
  }
}

export default Login;
