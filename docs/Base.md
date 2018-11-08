# ReactNative基础

本文档目标是解决以下问题：

1. 如何解决适配问题，react-native的中不带单位的尺寸数值表示的是什么，如何与设计稿尺寸px单位对应？

## 适配问题

涉及到的相关API

- Dimensions
- Platform

使用Platform判断当前os为安卓还是ios设备
```js
const isAndroid = Platform.OS === 'android';
```

使用Dimensions获取当前设备尺寸
```js
const {
  height,
  width
} = Dimensions.get('window');
```

对于Dimensions.get的参数的两个值（window与screen）的补充说明：[stackoverflow的回答](https://stackoverflow.com/questions/44978804/whats-the-difference-between-window-and-screen-in-the-dimensions-api)
>Screen and window dimensions are different on android

>window: reports width/height without the soft menu bar

>screen: reports entire screen's width/height

通常传的参数是window。

设备尺寸的补充说明：

iphone设备尺寸
```js
const X_WIDTH = 375;
const X_HEIGHT = 812;
const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;
const PAD_WIDTH = 768;
const PAD_HEIGHT = 1024;
```

### 尺寸适配

>React Native中的尺寸都是无单位的，表示的是与设备像素密度无关的逻辑像素点。

RN的尺寸使用的是dp（device-independent pixel）单位，而通常UI提供给我们的设计稿单位是px，需要写一个函数将px单位转换为dp单位。

```js
import {PixelRatio} from 'react-native';
const dp2px = dp=>PixelRatio.getPixelSizeForLayoutSize(dp);
const px2dp = px=>PixelRatio.roundToNearestPixel(px);
let pxRatio = PixelRatio.get();
let scale = 1 / pxRatio;
```

假设设计稿一个View的宽高为200，测试用设备的像素密度为2, 则在RN中实际使用的尺寸应该为
```js
{
  width: px2dp(200), //100
  height: px2dp(200), //100
}
```
其实就是px单位数值除以设备像素密度。

### 分辨率适配

两种方案：`宽度不变，高度自适应`与`高度不变，宽度自适应`。

### 状态栏适配

**顶部状态栏**

安卓与ios设备组件布局的开始位置是不同的。ios设备从手机窗口顶端的左侧开始布局，顶部状态栏就像悬浮在组件上一样。而安卓设备则是从顶部状态栏正下方位置开始布局。

**底部区域**

主要考虑适配iphoneX。

### 解决设备适配可用的第三方库

- [react-native-safe-area-view](https://github.com/react-community/react-native-safe-area-view)适配不同设备顶部与底部状态栏，能够使app的内容始终在安全可预期的范围内显示。
