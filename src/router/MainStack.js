import MainChildScreen from '../screens/MainChildScreen';
import UserChildScreen from '../screens/UserChildScreen';
import UserSecondChildScreen from '../screens/UserSecondChildScreen';

import ScanDemo from '../screens/ScanDemo';

import TabNavigator from './TabNavigator';

import {createStackNavigator} from 'react-navigation';

const MainStack = createStackNavigator({
  TabNavigator,
  MainChild: MainChildScreen,
  UserChild: UserChildScreen,
  UserSecondChild: UserSecondChildScreen,
  ScanDemo
}, {
  initialRouteName: 'TabNavigator'
})

export default MainStack;
