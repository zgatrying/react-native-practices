import React, { Component } from 'react';
import { Provider, inject, observer } from 'mobx-react';
import Navigator from './router';
import stores from './store';
import NavigationService from './NavigationService';

class App extends Component {

  componentDidMount() {
    console.disableYellowBox = true; //去除黄色弹框警告
  }

  render() {
    return (
      <Navigator 
        ref={NavigationService.createRef}
      />
    );
  }
}

export default class RootView extends Component {
  render() {
    return (
      <Provider {...stores}>
        <App />
      </Provider>
    )
  }
}
