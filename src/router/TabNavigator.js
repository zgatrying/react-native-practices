import MainScreen from '../screens/Main';
import UserCenterScreen from '../screens/UserCenter';

import {createBottomTabNavigator} from 'react-navigation';

export default createBottomTabNavigator({
  Main: MainScreen,
  UserCenter: UserCenterScreen
})