import React from 'react';
import { View } from 'react-native';
import { Text, Icon, Header } from 'react-native-elements';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation';
import { colors } from '../../config/theme';
import { style, styles } from './Feed.styles';

const TopFeed = () => <Text>TopFeed</Text>;

const BestFeed = () => <Text>BestFeed</Text>;

const HotFeed = () => <Text>HotFeed</Text>;

const Account = () => <Text>Account</Text>;

const FeedNavigator = createMaterialTopTabNavigator(
  {
    TopFeed: {
      screen: TopFeed,
      title: 'Top',
    },
    BestFeed: {
      screen: BestFeed,
    },
    HotFeed: {
      screen: HotFeed,
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
        if (routeName === 'TopFeed') {
          iconName = `plus`;
        }
        if (routeName === 'BestFeed') {
          iconName = `heart`;
        }
        if (routeName === 'HotFeed') {
          iconName = `fire`;
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
      showLabel: false,
      activeTintColor: colors.primary,
      inactiveTintColor: colors.muted,
      tabStyle: style.tabStyle,
      indicatorStyle: style.indicatorStyle,
      style: style.tabNavigatorStyle,
    },
  }
);

class Feed extends React.Component {
  static navigationOptions = {
    title: 'Feed Layout',
  };

  render() {
    return <FeedNavigator />;
  }
}

export default Feed;
