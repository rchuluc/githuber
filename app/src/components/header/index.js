import React from 'react'
import {View, Text, TouchableOpacity, StatusBar} from 'react-native'
import {withNavigation} from 'react-navigation'
import AsyncStorage from '@react-native-community/async-storage'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './styles'
import propTypes from 'prop-types'

Icon.loadFont()

const Header = ({title, navigation}) => {
  const signOut = async () => {
    await AsyncStorage.clear()
    navigation.navigate('Welcome')
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.left}></View>
      <Text style={styles.title}>{title} </Text>
      <TouchableOpacity onPress={() => signOut()}>
        <Icon style={styles.icon} size={16} name="exchange" />
      </TouchableOpacity>
    </View>
  )
}

Header.propTypes = {
  title: propTypes.string.isRequired,
  navigation: propTypes.shape({
    navigation: propTypes.func,
  }).isRequired,
}

export default withNavigation(Header)
