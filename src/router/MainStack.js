import MainChildScreen from '../screens/MainChildScreen';
import UserChildScreen from '../screens/UserChildScreen';
import UserSecondChildScreen from '../screens/UserSecondChildScreen';
import LCDemo from '../screens/LCDemo';
import ScanDemo from '../screens/ScanDemo';
import HlsDemo from '../screens/HlsDemo';

import TabNavigator from './TabNavigator';

import {createStackNavigator} from 'react-navigation';

const MainStack = createStackNavigator({
  Tab: {
    screen: TabNavigator,
    navigationOptions: {
      header: null
    }
  },
  LCDemo: LCDemo,
  HlsDemo: HlsDemo,
  MainChild: MainChildScreen,
  UserChild: UserChildScreen,
  UserSecondChild: UserSecondChildScreen,
  ScanDemo
}, {
  initialRouteName: 'Tab'
})

export default MainStack;
