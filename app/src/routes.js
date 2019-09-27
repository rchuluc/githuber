import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'

import Welcome from '@screens/welcome'
import Repositories from '@screens/repositories'
import Organizations from '@screens/organizations'

import {colors} from '@styles'

const Routes = (userLogged = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Welcome,
        App: createBottomTabNavigator(
          {
            Repositories,
            Organizations,
          },
          {
            tabBarOptions: {
              showIcon: true,
              showLabel: false,
              activeTintColor: colors.white,
              inactiveTintColor: colors.whiteTransparent,
              style: {
                backgroundColor: colors.secondary,
              },
            },
          },
        ),
      },
      {
        initialRouteName: userLogged ? 'App' : 'Welcome',
      },
    ),
  )

export default Routes
