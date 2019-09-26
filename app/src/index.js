/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState, useEffect} from 'react'
import CreateNavigator from './routes'
import AsyncStorage from '@react-native-community/async-storage'

const App = () => {
  const [userChecked, setUserChecked] = useState(false)
  const [userLogged, setUserLogged] = useState(false)

  useEffect(() => {
    checkuser()
  }, [])

  const checkuser = async () => {
    const username = await AsyncStorage.getItem('@githuber:username')
    setUserChecked(true)
    setUserLogged(!!username)
  }

  if (!userChecked) return null

  const Routes = CreateNavigator(userLogged)
  return <Routes />
}
export default App
