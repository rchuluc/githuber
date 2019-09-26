import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import Welcome from '@screens/welcome'
import Repositories from '@screens/repositories'
import Organizations from '@screens/organizations'

const Routes = (userLogged = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Welcome,
        Repositories,
      },
      {
        initialRouteName: userLogged ? 'Repositories' : 'Welcome',
      },
    ),
  )

export default Routes
