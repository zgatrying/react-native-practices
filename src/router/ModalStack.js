import MainStack from './MainStack';
import ModalScreen from '../screens/ModalScreen';

import {createStackNavigator} from 'react-navigation';

export default createStackNavigator({
  MainStack,
  ModalScreen
}, {
  initialRouteName: 'MainStack',
  mode: 'modal',
  headerMode: 'none'
})
