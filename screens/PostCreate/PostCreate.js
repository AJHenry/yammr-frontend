import React from 'react';
import { View, PermissionsAndroid } from 'react-native';
import {
  Button,
  Text,
  CheckBox,
  Input,
  Icon,
  Divider,
} from 'react-native-elements';
import { styles, style } from './PostCreate.styles';
import { colors } from '../../config/theme';
import { PostCreateHeader, LargeInput } from '../../components';

class PostCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      error: null,
      postconent: '',
    };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'PostCreate',
      header: null,
    };
  };

  async componentDidMount() {
    const { geolocation } = navigator;

    const granted = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );

    if (granted) {
      console.log('You can use the ACCESS_FINE_LOCATION');
    } else {
      console.log('ACCESS_FINE_LOCATION permission denied');
    }

    geolocation.getCurrentPosition(
      position => {
        console.log(position);
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      error => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }

  postHandler = () => {
    console.log(`Clicked post`);
  };

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <PostCreateHeader goBack={navigation.goBack} />
        <View style={styles.mainContainer}>
          <View style={styles.postContainer} />
          <View style={styles.bottomContainer}>
            <Text style={style.inputLabel}>CONTENT</Text>
            <LargeInput
              onChangeText={text => this.setState({ postcontent: text })}
              placeholder="Create something great"
              inputStyle={styles.inputContainer}
              multiline={true}
              error={this.state.error || ''}
            />
            <View style={styles.iconContainer}>
              <Icon
                iconStyle={style.icon}
                type="simple-line-icon"
                name="camera"
              />
              <Icon
                iconStyle={style.icon}
                type="simple-line-icon"
                name="picture"
              />
            </View>
            <View style={{ alignItems: 'center' }}>
              <Button title="POST" onPress={this.postHandler} />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default PostCreate;
