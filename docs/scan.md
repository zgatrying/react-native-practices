# react-native-camera库实践经验

目的：实现扫一扫功能。

第一步：引入依赖

```
yarn add react-native-camera
```

第二步：导入android与ios平台配置

```
react-native link react-native-camera
```

第三步：添加android与ios设备摄像头的访问权限

ios/{appName}/info.plist文件内添加
```
<key>NSCameraUsageDescription</key>
<string>需要使用您的相机扫描二维码，用来{目的}</string>
```
ps：ios提交App Store审核前，这个“目的”一定要填详细不然审核会不通过。

android/*/AndroidManifest.xml文件内添加
```
<uses-permission android:name="android.permission.CAMERA" />
```

示例代码参考src/screens/ScanDemo.js文件。

心得：

1. 示例代码中的_onBarCodeRead方法会在设备识别二维码后不等你处理结束会不断地触发，如何避免这个问题？

解决方案：添加一个布尔锁，第一次触发_onBarCodeRead时锁住，在扫码结果页面触发`componentWillUnmount`生命周期时才释放。
