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
  Overlay,
} from 'react-native-elements';

class Theme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
    };

    this.setVisible = this.setVisible.bind(this);
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

  setVisible() {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Card title="Card Style">
            <Text>
              The idea with React Native Elements is more about component
              structure than actual design.
            </Text>
          </Card>
        </View>
        <View style={styles.container}>
          <Text h1>Palette</Text>
          <Button
            title="Primary"
            buttonStyle={{ backgroundColor: colors.primary }}
          />
          <Button
            title="Secondary"
            buttonStyle={{ backgroundColor: colors.secondary }}
          />
          <Button
            title="Success"
            buttonStyle={{ backgroundColor: colors.success }}
          />
          <Button
            title="Danger"
            buttonStyle={{ backgroundColor: colors.danger }}
          />
          <Button
            title="Warning"
            buttonStyle={{ backgroundColor: colors.warning }}
          />
          <Button title="Info" buttonStyle={{ backgroundColor: colors.info }} />
          <Button
            title="Light"
            buttonStyle={{ backgroundColor: colors.light }}
            titleStyle={{ color: colors.dark }}
          />
          <Button
            title="Muted"
            buttonStyle={{ backgroundColor: colors.muted }}
          />
          <Button title="Dark" buttonStyle={{ backgroundColor: colors.dark }} />
          <Button
            title="Error"
            buttonStyle={{ backgroundColor: colors.error }}
          />
          <Button
            title="Black"
            buttonStyle={{ backgroundColor: colors.black }}
          />
          <Button
            title="White"
            buttonStyle={{ backgroundColor: colors.white }}
            titleStyle={{ color: colors.dark }}
          />
          <Button
            title="Transparent"
            buttonStyle={{ backgroundColor: colors.transparent }}
            titleStyle={{ color: colors.dark }}
          />
        </View>
        <View style={styles.container}>
          <Text h1>Avatars</Text>
          <Avatar rounded size="large" title="AH" />
        </View>
        <View style={styles.container}>
          <Text h1>Badges</Text>
          <Badge>
            <Text>Badge</Text>
          </Badge>
          <Badge
            containerStyle={{ backgroundColor: colors.secondary }}
            textStyle={{ color: colors.light }}
          >
            <Text>34</Text>
          </Badge>
        </View>
        <View style={styles.container}>
          <Text h1>Input</Text>
          <Input
            label="Optional Label"
            errorMessage="Error message"
            placeholder="Input"
          />
        </View>
        <View style={styles.container}>
          <Text h1>Overlay</Text>
        </View>
      </ScrollView>
    );
  }
}

export default Theme;
