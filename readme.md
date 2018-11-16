## react-native 项目的实践总结

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

- react-navigation，管理导航
- mobx，管理app状态
- mobx-react，实现组件响应状态变化
- react-navigation-mobx-helpers，使用mobx封装了一个NavigatorService服务。

# LICENSE 

MIT
