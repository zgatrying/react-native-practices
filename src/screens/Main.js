import React, { Component } from 'react';
import { View, Text, FlatList, StatusBar, Image } from 'react-native';
import NavigationService from '../NavigationService';
import {NavigationEvents} from 'react-navigation';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { ListItem, Header } from 'react-native-elements';
import {sleep} from '../utils';
import PullRefresh from 'react-pullrefresh';
import MyFancyModule from 'react-native-my-fancy-library';
export default class Main extends Component {

  static navigationOptions = {
    title: '首页',
  }

  constructor() {
    super()
    this.onRefresh = this.onRefresh.bind(this)
  }

  componentDidMount = () => {
    console.log('Main didMount')
  };

  async onRefresh(next) {
    console.log('开始更新')
    await sleep(2000)
    console.log('更新结束')
    next && next()
  }

  renderItem = ({item}) => (
    <ListItem
      title={item.name}
      subtitle='demo'
      onPress={item.onPress}
      rightIcon={<AntIcon name='right' size={20} color='grey' />}
    />
  )

  keyExtractor = (item, index) => item.name

  render() {
    const list = [
      {
        name: '圆弧滚动条案例',
        onPress: () => NavigationService.navigate('MainChild'),
      },
      {
        name: 'Show FullScreenModal',
        onPress: () => NavigationService.navigate('ModalScreen'),
      },
      {
        name: '扫一扫示例',
        onPress: () => NavigationService.navigate('ScanDemo'),
      },
      {
        name: '乐橙开放平台对接',
        onPress: () => NavigationService.navigate('LCDemo'),
      },
    ]
    return (
      <View>
        <NavigationEvents
          onWillFocus={() => this.onRefresh()}
          />
        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          containerStyle={{
            backgroundColor: '#58bbff',
            justifyContent: 'space-around',
            position: 'relative',
            zIndex: 2,
          }}
          centerComponent={{ text: '首页', style: { color: '#fff' } }}
        />
        <PullRefresh
          pulledComponent={false}
          onRefresh={this.onRefresh}
        >
          <FlatList
            keyExtractor={this.keyExtractor}
            data={list}
            renderItem={this.renderItem}
          />
        </PullRefresh>
      </View>
    );
  }
}