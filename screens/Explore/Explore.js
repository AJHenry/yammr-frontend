import React from 'react';
import { View, Easing, Animated } from 'react-native';
import { Text, Icon, Header } from 'react-native-elements';
import { colors } from '../../config/theme';
import { style, styles } from './Explore.styles';
import { ExploreHeader, GenericHeader } from '../../components';
import Map from './Map/Map';
import List from './List/List';
import {
  createMaterialTopTabNavigator,
  createStackNavigator,
} from 'react-navigation';

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

const MapStack = createStackNavigator(
  {
    Map: {
      screen: Map,
    },
  },
  {
    transitionConfig,
    navigationOptions: {
      gesturesEnabled: true,
    },
  }
);

const ListStack = createStackNavigator(
  {
    List: {
      screen: List,
    },
  },
  {
    transitionConfig,
    navigationOptions: {
      gesturesEnabled: true,
    },
  }
);

const NavBar = createMaterialTopTabNavigator(
  {
    Map: {
      screen: MapStack,
    },
    List: {
      screen: ListStack,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Map') {
          iconName = focused ? `comment` : `comment-o`;
        }
        if (routeName === 'List') {
          iconName = focused ? `map` : `map-o`;
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
    tabBarOptions: {
      activeTintColor: colors.white,
      style: {
        height: 35,
        backgroundColor: colors.primary,
        justifyContent: 'flex-start',
        padding: 0,
      },
      labelStyle: {
        margin: 0,
        padding: 0,
      },
    },
    initialRouteName: 'List',
  }
);

class Explore extends React.Component {
  static navigationOptions = {
    title: 'Explore',
    header: null,
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <ExploreHeader />
        <NavBar />
      </View>
    );
  }
}

export default Explore;
