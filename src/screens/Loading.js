import React, { Component } from 'react';
import { ActivityIndicator, AsyncStorage, View, StatusBar } from 'react-native';
import NavigationService from '../NavigationService';
export default class Main extends Component {

  constructor() {
    super()
    this._loadPage()
  }

  async _loadPage() {
    console.log('loading')
    let isLogin = await AsyncStorage.getItem('cache')
    if(isLogin) {
      NavigationService.navigate('Main')
    } else {
      NavigationService.navigate('Login')
    }
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    )
  }
}