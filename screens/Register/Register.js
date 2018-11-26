import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import { Button, Text, CheckBox, Input, Icon } from 'react-native-elements';
import { styles, style } from './Register.styles';
import { colors } from '../../config/theme';
import userService from '../../services/user.service';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      email: '',
      password: '',
      checked: false,
      error: false,
      passwordError: false,
      emailError: false,
    };

    this.viewPassword = this.viewPassword.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

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

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      ...this.state,
      [name]: value,
    });
  }

  viewPassword() {
    this.setState({
      ...this.state,
      visible: !this.state.visible,
    });
  }

  _registerAsync = async () => {
    let emailRegex = /\S+@\S+\.edu/;
    let shouldReturn = false;
    if (!this.state.email.match(emailRegex)) {
      this.setState({ emailError: true });
      shouldReturn = true;
    } else {
      this.setState({ emailError: false });
    }

    if (this.state.password.length < 1) {
      this.setState({ passwordError: true });
      shouldReturn = true;
    } else {
      this.setState({ passwordError: false });
    }

    if (!this.state.checked) {
      this.setState({ error: true });
      shouldReturn = true;
    } else {
      this.setState({ error: false });
    }

    if (shouldReturn) return;
    userService.register(this.state.email, this.state.password);
    this.props.navigation.navigate('Login');
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text style={styles.header}>Register</Text>
        <View style={styles.inputContainer}>
          <Input
            label="EMAIL"
            labelStyle={style.labelStyle}
            errorMessage={
              this.state.emailError ? 'Valid .edu email required' : ' '
            }
            onChangeText={text => this.setState({ email: text })}
            placeholder="Email"
          />
          <Input
            placeholder="Password"
            labelStyle={style.labelStyle}
            errorMessage={this.state.passwordError ? 'Password required' : ' '}
            onChangeText={text => this.setState({ password: text })}
            label="PASSWORD"
            secureTextEntry={this.state.visible}
            rightIcon={
              <Icon
                type="font-awesome"
                name={this.state.visible ? 'eye' : 'eye-slash'}
                color={colors.secondary}
                onPress={this.viewPassword}
              />
            }
          />
          <CheckBox
            center
            checked={this.state.checked}
            checkedColor={style.labelStyle.color}
            containerStyle={
              this.state.error ? style.checkboxOutline : style.checkbox
            }
            onPress={() => this.setState({ checked: !this.state.checked })}
            title="I agree to Yammer Terms of Service"
          />
        </View>

        <Button
          buttonStyle={style.registerButton}
          onPress={this._registerAsync}
          title="REGISTER"
        />
      </KeyboardAvoidingView>
    );
  }
}

export default Register;
