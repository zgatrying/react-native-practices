## react-native 项目的实践总结

## 代码没有怎么更新了（慎用！），目前主要在issue中记录RN开发的心得与问题解决过程。

本项目作为后续RN项目的模板与案例集合使用。

当前app组件结构
- App
  - SwitchNavigator(initRouteName: LoadingScreen)
    - LoadingScreen
      - LoadingScreen
    - AuthStack(initRouteName: LoginScreen)
      - LoginScreen
    - ModalStack(initRouteName: MainStack)
      - MainStack(initRouteName: TabNavigator)
        - TabNavigator(initRouteName: MainScreen)
          - MainScreen
          - UserCenterScreen
        - MainSubScreen
        - UserChildScreen
        - UserSecondChildScreen
      - ModalScreen

### 项目依赖

- [react-navigation，管理导航](https://reactnavigation.org/)
- [mobx，管理app状态](https://cn.mobx.js.org/)
- [react-native-elements，UI组件库](https://react-native-training.github.io/react-native-elements/docs/getting_started.html)

# LICENSE 

MIT
