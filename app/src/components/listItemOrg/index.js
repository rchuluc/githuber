import React from 'react'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import {View, Text, Image} from 'react-native'
import propTypes from 'prop-types'

const ListItem = ({item}) => (
  <View style={styles.container}>
    <Image style={styles.avatar} source={{uri: item.avatar_url}} />
    <Text style={styles.title}>{item.login}</Text>
  </View>
)

ListItem.propTypes = {
  item: propTypes.shape({
    avatar_url: propTypes.string,
    login: propTypes.string,
  }).isRequired,
}

export default ListItem
