import React, { Component } from 'react';
import {inject} from 'mobx-react';
import { View, Text, Button } from 'react-native';
import NavigationService from '../NavigationService';

export default class TabSecondChildScreen extends Component {

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>TabChildScreen Screen</Text>
        <Button
          title="Go back"
          onPress={() => NavigationService.goBack()}
        />
        <Button
          title="back To UserCenter"
          onPress={() => NavigationService.navigate('UserCenter')}
        />
        <Button
          title="back To Main"
          onPress={() => NavigationService.navigate('Main')}
        />
      </View>
    );
  }
}