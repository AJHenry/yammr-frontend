import React from 'react';
import { View } from 'react-native';
import { Text, Icon, Header } from 'react-native-elements';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation';
import { colors } from '../../config/theme';
import Feed from '../Feed/Feed';
import Explore from '../Explore/Explore';
import Account from '../Account/Account';

const NavBar = createBottomTabNavigator(
  {
    Feed: {
      screen: Feed,
    },
    Explore: {
      screen: Explore,
    },
    Account: {
      screen: Account,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Feed') {
          iconName = `plus`;
        }
        if (routeName === 'Explore') {
          iconName = `heart`;
        }
        if (routeName === 'Account') {
          iconName = `user`;
        }

        // You can return any component that you like here
        return (
          <Icon
            type="font-awesome"
            name={iconName}
            size={horizontal ? 20 : 25}
            color={tintColor}
          />
        );
      },
    }),
    lazy: true,
    backBehavior: 'initialRoute',
    tabBarOptions: {
      showIcon: true,
    },
  }
);

export default class Main extends React.Component {
  render() {
    return <NavBar />;
  }
}
