import React, { Component } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import NavigationService from '../NavigationService';

export default class MainChildScreen extends Component {

  static navigationOptions = {
    title: '首页的子页面'
  }

  render() {
    return (
      <SafeAreaView>
        <ScrollView contentContainerStyle={{alignItems: 'center'}}>
          <Button
            title="Go Back"
            onPress={() => NavigationService.goBack()}
          />
          <Button
            title="Go to UserSecondChild"
            onPress={() => NavigationService.navigate('UserSecondChild')}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}