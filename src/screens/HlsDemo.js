import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class HlsDemo extends Component {
  static navigationOptions = {
    title: '乐橙 webview直播'
  };

  componentWillUnmount() {
    let state = this.props.navigationOptions.state;
    if(state && state.params) {
      let params = state.params;
      params.deleteHls && params.deleteHls();
    }
  }

  render() {
    return (
      <View>
      </View>
    );
  }
}
