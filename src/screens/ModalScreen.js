import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import NavigationService from '../NavigationService';

export default class ModalScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
        <Text>全屏弹窗内容</Text>
        <Button title="hide" onPress={() => NavigationService.goBack()}  />
      </View>
    );
  }
}
