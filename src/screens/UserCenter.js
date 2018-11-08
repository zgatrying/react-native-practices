import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import NavigationService from '../NavigationService';

export default class Login extends Component {

  componentDidMount = () => {
    console.log('UserCenter didMount')
  };

  handleGotoNextPage() {
    NavigationService.navigate('UserChild')
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>UserCenter Screen</Text>
        <Button
          title="Go to UserChildScreen"
          onPress={() => this.handleGotoNextPage()}
        />
        <Button
          title="Go to Main"
          onPress={() => NavigationService.navigate('Main')}
        />
        <Button
          title="Logout"
          onPress={() => NavigationService.navigate('AuthStack')}
        />
      </View>
    );
  }
}