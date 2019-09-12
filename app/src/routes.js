import {createAppContainer, createSwitchNavigator} from 'react-navigation'

import Welcome from '@screens/welcome'
import Repositories from '@screens/repositories'

const Routes = createAppContainer(
  createSwitchNavigator({
    Welcome,
    Repositories,
  }),
)

export default Routes
