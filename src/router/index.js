import LoadingScreen from '../screens/Loading';
import AuthStack from './AuthStack';
import ModalStack from './ModalStack';

import {createSwitchNavigator} from 'react-navigation';

export default createSwitchNavigator({
  Loading: LoadingScreen,
  AuthStack,
  ModalStack
}, {
  initialRouteName: 'Loading'
})