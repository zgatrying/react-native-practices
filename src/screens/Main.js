import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import NavigationService from '../NavigationService';
import {observer} from 'mobx-react';

export default class Main extends Component {

  componentDidMount = () => {
    console.log('Main didMount')
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Main Screen</Text>
        <Button
          title="Go To MainChild"
          onPress={() => NavigationService.navigate('MainChild')}
        />
        <Button
          title="Show FullScreenModal"
          onPress={() => NavigationService.navigate('ModalScreen')}
        />
        <Button
          title="扫一扫示例"
          onPress={() => NavigationService.navigate('ScanDemo')}
        />
      </View>
    );
  }
}