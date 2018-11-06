import React from 'react';
import { View, KeyboardAvoidingView } from 'react-native';
import { Button, Text, Header, Input, Icon } from 'react-native-elements';
import { styles, style } from './Login.styles';
import { colors } from '../../config/theme';
import AuthenticationHeader from '../../components/CustomHeaders/AuthenticationHeaders/AuthenticationHeader';

import { userActions } from '../../actions/user.actions';
import { userConstants } from '../../constants/user.constants';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: ' ',
    };
  }

  _signInAsync = async () => {
    const { dispatch } = this.props.navigation;
    dispatch(
      userActions.login(this.state.email, this.state.password).then(res => {
        if (res.type === userConstants.LOGIN_SUCCESS) {
          this.setState({ ...this.state, error: ' ' });
          this.props.navigation.navigate('App');
        } else {
          this.setState({
            ...this.state,
            error: 'Invalid email/password. Please try again.',
          });
        }
        return res;
      })
    );
  };

  static navigationOptions = ({ navigation }) => {
    return {
      headerStyle: {
        backgroundColor: colors.transparent,
      },
      headerBackImage: (
        <Icon type="ionicons" name="arrow-back" title="Info" size={28} />
      ),
      headerTransparent: true,
    };
  };

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
            errorMessage={this.state.error}
            onChangeText={text =>
              this.setState({ ...this.state, password: text })
            }
            secureTextEntry
          />
        </View>
        <Text style={styles.forgotPassword}>Forgot your password?</Text>
        <Button
          buttonStyle={style.loginButton}
          onPress={this._signInAsync}
          title="LOG IN"
        />
      </KeyboardAvoidingView>
    );
  }
}

export default Login;
