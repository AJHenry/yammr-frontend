import React from 'react';
import { View } from 'react-native';
import { Text, Icon, Header } from 'react-native-elements';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import { colors } from '../../config/theme';
import Feed from '../Feed/Feed';
import Explore from '../Explore/Explore';
import Account from '../Account/Account';

const FeedStack = createStackNavigator({
  Feed: {
    screen: Feed,
  },
});

const ExploreStack = createStackNavigator({
  Explore: {
    screen: Explore,
  },
});

const AccountStack = createStackNavigator({
  Account: {
    screen: Account,
  },
});

const NavBar = createBottomTabNavigator(
  {
    Feed: {
      screen: FeedStack,
    },
    Explore: {
      screen: ExploreStack,
    },
    Account: {
      screen: AccountStack,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Feed') {
          iconName = `fire`;
        }
        if (routeName === 'Explore') {
          iconName = `map`;
        }
        if (routeName === 'Account') {
          iconName = `user`;
        }

        return (
          <Icon
            type="simple-line-icon"
            name={iconName}
            size={25}
            color={tintColor}
          />
        );
      },
    }),
    lazy: true,
    backBehavior: 'initialRoute',
    tabBarOptions: {
      showIcon: true,
      activeTintColor: colors.primary,
    },
  }
);

export default class Main extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return <NavBar />;
  }
}
