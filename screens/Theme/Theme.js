import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import { styles, style } from './Theme.styles';
import { colors } from '../../config/theme';
import {
  Avatar,
  Badge,
  Card,
  Divider,
  Header,
  Icon,
  Rating,
  SearchBar,
  Slider,
  Text,
  Button,
  ButtonGroup,
  CheckBox,
  Input,
  ListItem,
} from 'react-native-elements';

class Theme extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  viewPassword() {
    this.setState({
      visible: !this.state.visible,
    });
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Avatar
            rounded
            size="large"
            title="LW"
            onPress={() => console.log('Works!')}
            activeOpacity={0.7}
          />
          <Badge containerStyle={{ backgroundColor: 'violet' }}>
            <Text>User 1</Text>
          </Badge>
          <Button title="BUTTON WITH ICON COMPONENT" />
          <Card title="HELLO WORLD" key={0}>
            <Text>
              The idea with React Native Elements is more about component
              structure than actual design.
            </Text>
            <Button
              icon={<Icon name="code" color="#ffffff" />}
              title="VIEW NOW"
            />
          </Card>

          <CheckBox center title="Click Here" />
          <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
          />
          <Input
            label="Optional Label"
            errorMessage="Error message"
            placeholder="Input"
            leftIcon={<Icon name="user" size={24} color="black" />}
          />
        </View>
      </ScrollView>
    );
  }
}

export default Theme;
