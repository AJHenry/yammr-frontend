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
import More from '../More/More';
import PostView from '../PostView/PostView';
import PostCreate from '../PostCreate/PostCreate';

const FeedStack = createStackNavigator({
  Feed: {
    screen: Feed,
  },
  PostView: {
    screen: PostView,
  },
  PostCreate: {
    screen: PostCreate,
  },
});

// Needed to make bottomTabBar go away on subsequent screens
FeedStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

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

const MoreStack = createStackNavigator({
  More: {
    screen: More,
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
    More: {
      screen: MoreStack,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Feed') {
          iconName = focused ? `comment` : `comment-o`;
        }
        if (routeName === 'Explore') {
          iconName = focused ? `map` : `map-o`;
        }
        if (routeName === 'Account') {
          iconName = focused ? `user` : `user-o`;
        }
        if (routeName === 'More') {
          iconName = focused ? `bars` : `navicon`;
        }

        return (
          <Icon
            type="font-awesome"
            name={iconName}
            size={22}
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

  constructor(props) {
    super(props);
  }

  render() {
    return <NavBar screenProps={{ rootNavigation: this.props.navigation }} />;
  }
}
