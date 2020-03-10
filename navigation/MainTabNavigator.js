import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';

import {TabBarIconMaterialCommunityIcons} from '../components/TabBarIcon.js'

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Social Club',
  tabBarIcon: ({ focused }) => (
    <TabBarIconMaterialCommunityIcons
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `home${focused ? '' : '-outline'}`
          : 'home'
      }
    />
  ),
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'About',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

LinksStack.path = '';


const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
});

tabNavigator.path = '';

export default tabNavigator;
