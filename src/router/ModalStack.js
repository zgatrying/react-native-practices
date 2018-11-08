import MainStack from './MainStack';
import ModalScreen from '../screens/ModalScreen';

import {createStackNavigator} from 'react-navigation';

export default createStackNavigator({
  MainStack,
  ModalScreen
}, {
  mode: 'modal',
  headerMode: 'none'
})
