import React, { Component } from 'react';
import { View, Text } from 'react-native';
import NavigationService from '../NavigationService';
export default class ScanResult extends Component {

  componentWillUnmount() {
    let params = this.props.navigation.state.params;
    if(params) {
      params.enableBarcodeRead && params.enableBarcodeRead()
    }
  }

  render() {
    const scanResult = NavigationService.getParam('info');
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
        <Text>{scanResult}</Text>
      </View>
    );
  }
}
