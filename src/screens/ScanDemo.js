import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Easing,
  Image,
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import NavigationService from '../NavigationService';
import {
  screenH,
  screenW,
  APP_Bar_Height
} from '../utils/ScreenUtils';
const cameraHeight = 270;
const cameraWidth = 270;
const maskHeight = parseInt((screenH - APP_Bar_Height - cameraHeight) / 2);
const maskWidth = parseInt((screenW - cameraWidth) / 2);
const viewFinderSource = require('../images/viewfinder.png');
export default class ScanScreen extends Component {

  constructor() {
    super();
    this.state = {
      animatedValue: new Animated.Value(-cameraHeight)
    };
    this.isOnBarcodeRead = false;
  }

  componentDidMount = () => {
    this.scannerLineMove();
  };

  scannerLineMove = () => {
    this.state.animatedValue.setValue(-cameraHeight);  //重置动画值为0
    Animated.timing(this.state.animatedValue, {
      toValue: cameraHeight,
      duration: 2500,
      easing: Easing.linear
    }).start(() => this.scannerLineMove());
  };

  enableBarcodeRead = () => this.isOnBarcodeRead = false;
  disableBarcodeRead = () => this.isOnBarcodeRead = true;

  onSuccess = (qrInfo) => {
    NavigationService.navigate('ScanResult', {
      info: qrInfo
    });
  }

  onError = (data) => {
    setTimeout(()=> this.enableBarcodeRead(), 1000);
  }

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref="camera"
          type={RNCamera.Constants.Type.back}
          style = {styles.cameraView}
          barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
          flashMode={RNCamera.Constants.FlashMode.on}
          onBarCodeRead={this._onBarCodeRead}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
        >
          <View style={styles.maskOuter}>
            <View style={[{height: maskHeight}, styles.maskItem]} />
            <View style={styles.maskCenter}>
              <View style={[{width: maskWidth}, styles.maskItem]} />
              <View style={styles.maskInner}>
                <Animated.View
                  style={{
                    transform: [{
                      translateY: this.state.animatedValue,
                    }]
                  }}
                >
                  <Image
                    source={viewFinderSource}
                    resizeMode="stretch"
                    style={{
                      width: '100%',
                      height: '100%',
                    }}
                  />
                </Animated.View>
              </View>
              <View style={[{width: maskWidth}, styles.maskItem]} />
            </View>
            <View style={[{height: maskHeight}, styles.maskItem]} />
          </View>
        </RNCamera>
      </View>
    );
  }

  _onBarCodeRead = ({result}) => {
    if(this.isOnBarcodeRead) return false;
    this.disableBarcodeRead();
    setTimeout(() => {
      this.onSuccess(result);
    }, 600);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cameraView: {
    flex: 1
  },
  maskOuter: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    height: '100%',
  },
  maskItem: {
    backgroundColor: 'rgba(1,1,1,0.6)', 
  },
  maskCenter: {
    flexDirection: 'row',
  },
  maskInner: {
    width: cameraWidth,
    height: cameraHeight,
    overflow: 'hidden',
    borderColor: '#fff',
    borderWidth: 1
  }
});