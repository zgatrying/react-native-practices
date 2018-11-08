import {
  Platform,
  Dimensions
} from 'react-native';

export const isAndroid = () => Platform.OS === 'android';
// iPhoneX
const X_WIDTH = 375;
const X_HEIGHT = 812;

//设计稿尺寸 iphone6
const defaultWidth = 375;
const defaultHeight = 667;

const {
  height,
  width
} = Dimensions.get('window');
export const screenW = width;
export const screenH = height;
export const APP_Bar_Height = 44;

/**
 * 判断是否为iPhone X
 * @returns {boolean}
 */
export function isIPhoneX() {
  return (
    Platform.OS === 'ios' && 
    ((screenH === X_HEIGHT && screenW === X_WIDTH) ||
       (screenW === X_HEIGHT && screenH === X_WIDTH))
  )
}