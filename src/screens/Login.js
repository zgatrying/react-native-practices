import React, { Component } from 'react';
import { View, Text, Button, AsyncStorage } from 'react-native';
import NavigationService from '../NavigationService';

export default class Login extends Component {

  login() {
    AsyncStorage.setItem('cache', 'true')
    NavigationService.navigate('ModalStack')
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login Screen</Text>
        <Button
          title="Go Main"
          onPress={() => this.login()}
        />
      </View>
    );
  }
}