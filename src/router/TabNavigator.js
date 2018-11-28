import React, { Component } from 'react';
import MainScreen from '../screens/Main';
import UserCenterScreen from '../screens/UserCenter';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {createBottomTabNavigator} from 'react-navigation';

export default createBottomTabNavigator({
  Main: MainScreen,
  UserCenter: UserCenterScreen
}, {
  initialRouteName: 'Main',
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Main') {
        iconName = `home`;
      } else if (routeName === 'UserCenter') {
        iconName = `user`;
      }
      return <AntDesign name={iconName} size={horizontal ? 15 : 25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: '#58bbff',
    inactiveTintColor: 'gray',
  },
})