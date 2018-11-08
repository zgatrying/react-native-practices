import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import NavigationService from '../NavigationService';

export default class TabChildScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>TabChild Screen</Text>
        <Button
          title="Go Back"
          onPress={() => NavigationService.goBack()}
        />
        <Button
          title="Go to UserSecondChild"
          onPress={() => NavigationService.navigate('UserSecondChild')}
        />
      </View>
    );
  }
}