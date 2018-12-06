import React from 'react';
import { View, Animated, Easing } from 'react-native';
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

const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 500,
      easing: Easing.out(Easing.poly(10)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {
      const { position, layout, scene, index, scenes } = sceneProps;
      const toIndex = index;
      const thisSceneIndex = scene.index;
      const height = layout.initHeight;
      const width = layout.initWidth;

      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
        outputRange: [width, 0, 0],
      });

      // Since we want the card to take the same amount of time
      // to animate downwards no matter if it's 3rd on the stack
      // or 53rd, we interpolate over the entire range from 0 - thisSceneIndex
      const translateY = position.interpolate({
        inputRange: [0, thisSceneIndex],
        outputRange: [height, 0],
      });

      const slideFromRight = { transform: [{ translateX }] };
      const slideFromBottom = { transform: [{ translateY }] };

      const lastSceneIndex = scenes[scenes.length - 1].index;

      // Test whether we're skipping back more than one screen
      if (lastSceneIndex - toIndex > 1) {
        // Do not transoform the screen being navigated to
        if (scene.index === toIndex) return;
        // Hide all screens in between
        if (scene.index !== lastSceneIndex) return { opacity: 0 };
        // Slide top screen down
        return slideFromBottom;
      }

      return slideFromRight;
    },
  };
};

const FeedStack = createStackNavigator(
  {
    Feed: {
      screen: Feed,
    },
    PostView: {
      screen: PostView,
    },
    PostCreate: {
      screen: PostCreate,
    },
  },
  {
    transitionConfig,
    navigationOptions: {
      gesturesEnabled: true,
      gestureResponseDistance: {
        horizontal: 500,
      },
    },
  }
);

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
