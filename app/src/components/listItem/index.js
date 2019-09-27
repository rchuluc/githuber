import React from 'react'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import {View, Text} from 'react-native'
import propTypes from 'prop-types'

const ListItem = ({item}) => (
  <View style={styles.container}>
    <Text style={styles.title}>{item.full_name}</Text>
    <View style={styles.infoContainer}>
      <View style={styles.info}>
        <Icon name="star" size={12} style={styles.infoIcon} />
        <Text style={styles.infoText}>{item.stargazers_count}</Text>
      </View>
      <View style={styles.info}>
        <Icon name="code-fork" size={12} style={styles.infoIcon} />
        <Text style={styles.infoText}>{item.forks_count}</Text>
      </View>
      <View style={styles.info}>
        <Icon name="eye" size={12} style={styles.infoIcon} />
        <Text style={styles.infoText}>{item.watchers_count}</Text>
      </View>
    </View>
  </View>
)

ListItem.propTypes = {
  item: propTypes.shape({
    full_name: propTypes.string,
    stargazers_count: propTypes.number,
    forks_count: propTypes.number,
    watchers_count: propTypes.number,
  }).isRequired,
}

export default ListItem
