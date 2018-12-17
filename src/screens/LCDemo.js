import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import {observable, action, computed} from 'mobx';
import {observer} from 'mobx-react';
import SafeAreaView from 'react-native-safe-area-view';
import md5 from 'md5';
import {
  Button,
  Text,
  Input,
} from 'react-native-elements';
import NavigationService from '../NavigationService';
import fetch from '../utils/lc_fetch';
@observer
export default class LCDemo extends Component {

  static navigationOptions = {
    title: '乐橙开放平台接口调试'
  }

  ver = '1.0';
  appId = '';
  appSecret = '';

  liveToken = '';
  @observable account = '';

  @observable time = new Date().getTime();
  @observable nonce = this.getRandomNum();

  @observable responseText = '暂无';
  @observable accessToken = '';
  @observable userToken = '';

  @observable verifyCode = '';
  
  getSign() {
    console.log(this.time);
    let signOriginString = `time:${this.time},nonce:${this.nonce},appSecret:${this.appSecret}`;
    let md5Value = md5(signOriginString);
    console.log('md5:', md5Value);
    let result = md5Value;
    // console.log('16进制32位小写字符串：', result);
    return result;
  }

  getSystem() {
    this.nonce = this.getRandomNum();
    this.time = parseInt(new Date().getTime() / 1000); //单位为秒s
    return {
      ver: this.ver,
      sign: this.getSign(),
      appId: this.appId,
      time: this.time,
      nonce: this.nonce
    }
  }

  constructor() {
    super();
    this.getUserToken = this.getUserToken.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
    this.getVerifyCode = this.getVerifyCode.bind(this);
    this.userBind = this.userBind.bind(this);
    this.createHls = this.createHls.bind(this);
    this.deleteHls = this.deleteHls.bind(this);
  }

  getRandomNum(targetNum = 32) {
    var chars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var nums="";
    for(var i=0;i<targetNum;i++){
      var id = parseInt(Math.random()*61);
      nums+=chars[id];
    }
    return nums;
  }

  async getUserToken() {
    try {
      this.responseText = '';
      let res = await fetch({
        url: 'userToken',
        method: 'post',
        data: {
          system: this.getSystem(),
          params: {
            phone: "15757855224"
          },
          id: '1'
        }
      });
      this.responseText = JSON.stringify(res);
      if(res) {
        this.userToken = res.data.result.data.userToken;
      } else {
        throw new Error('res undefiend');
      }
    } catch (error) {
      this.responseText = error.message;
      console.log(error)
    }
  }

  async getAccessToken() {
    try {
      this.responseText = '';
      let res = await fetch({
        url: 'accessToken',
        method: 'post',
        data: {
          system: this.getSystem(),
          params: {
            phone: '15757855224'
          },
          id: '2'
        }
      })
      this.responseText = JSON.stringify(res);
      if(res.data.result) {
        this.accessToken = res.data.result.data.accessToken;
      }
    } catch (error) {
      this.responseText = error.message;
      console.log(error)
    }
  }

  async getVerifyCode() {
    try {
      this.responseText = '';
      let res = await fetch({
        url: 'userBindSms',
        method: 'post',
        data: {
          system: this.getSystem(),
          params: {
            phone: '15757855224'
          },
          id: '3'
        }
      })
      this.responseText = JSON.stringify(res);
      console.log(res.data);
    } catch (error) {
      this.responseText = error.message;
      console.log(error)
    }
  }

  async userBind() {
    try {
      this.responseText = '';
      let res = await fetch({
        url: 'userBind',
        method: 'post',
        data: {
          system: this.getSystem(),
          params: {
            phone: '15757855224',
            smsCode: this.verifyCode
          },
          id: '4'
        }
      })
      this.responseText = JSON.stringify(res);
      console.log(res.data);
    } catch (error) {
      this.responseText = error.message;
      console.log(error)
    }
  }

  async createHls() {
    try {
      this.responseText = '';
      let res = await fetch({
        url: 'bindUserDeviceLive',
        method: 'post',
        data: {
          system: this.getSystem(),
          params: {
            token: this.userToken,
            deviceId: "2342sdfl-df323-23",
            channelId: "0",
            streamId: 0,
            liveMode: "proxy"
          },
          id: '5'
        }
      })
      if(!res) throw new Error('res undefined')
      this.responseText = JSON.stringify(res);
      if(res.data.result.code == 0) {
        let result = res.data.result;
        let streams = result.data.streams
        console.log('直播流hls访问地址', streams[0].hls);
        console.log('视频封面', streams[0].coverUrl);
        console.log('直播token', result.data.liveToken);
        this.liveToken = result.data.liveToken;
        NavigationService.navigate('HlsDemo', {
          deleteHls: this.deleteHls,
          hlsData: {
            url: streams[0].hls,
            coverUrl: streams[0].coverUrl
          }
        })
      } else {
        throw new Error(res.data.result.msg);
      }
    } catch (error) {
      this.responseText = error.message;
      console.log(error)
    }
  }

  async deleteHls() {
    try {
      this.responseText = '';
      if(this.liveToken === '') {
        throw new Error('未获取直播token，请先获取直播token');
      }
      let res = await fetch({
        url: 'unbindLive',
        method: 'post',
        data: {
          system: this.getSystem(),
          params: {
            token: this.userToken,
            liveToken: this.liveToken
          },
          id: '6'
        }
      })
      this.responseText = JSON.stringify(res);
      if(res.data.result) {
        console.log('删除直播的操作结果', res.data.result.msg);
      }
    } catch (error) {
      this.responseText = error.message;
      console.log(error)
    }
  }

  render() {
    return (
      <SafeAreaView>
        <ScrollView contentContainerStyle={{
          paddingBottom: 20,
        }}>
          <View style={{
            paddingTop: 4,
            height: 200,
            backgroundColor: 'lightblue',
          }}>
            <Text>请求返回的消息：</Text>
            <Text style={{textAlign: 'center'}}>
              {this.responseText}
            </Text>
          </View>
          <Input
            label="账号"
            value={this.account}
            containerStyle={{width: '100%'}}
            onChangeText={(value) => this.account = value}
            placeholder='请输入app账号'
          />
          <Text style={{ marginTop: 20 }}>1. 获取安全token</Text>
          <Button
            title="获取用户token"
            onPress={this.getUserToken}
          />
          <Button
            title="获取管理员token"
            onPress={this.getAccessToken}
            containerStyle={{ marginTop: 20 }}
          />
          <Text style={{marginTop: 20}}>2. 对接账号</Text>
          <Button
            title="获取短信验证码"
            onPress={this.getVerifyCode}
          />
          <Input
            value={this.verifyCode}
            containerStyle={{width: '100%'}}
            onChangeText={(value) => this.verifyCode = value}
            placeholder='输入验证码'
          />
          <Button
            title="验证"
            onPress={this.userBind}
            containerStyle={{ marginTop: 20 }}
          />
          <Text style={{marginTop: 20}}>3. 直播操作</Text>
          <Button
            title="创建直播"
            onPress={this.createHls}
          />
          <Button
            title="删除直播"
            onPress={this.deleteHls}
            containerStyle={{ marginTop: 20 }}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
