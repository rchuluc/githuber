import React, {useEffect, useState} from 'react'
import propTypes from 'prop-types'
import {View, ActivityIndicator, FlatList} from 'react-native'
import Header from '@components/header'
import Icon from 'react-native-vector-icons/FontAwesome'
import Api from '@services/api'
import AsyncStorage from '@react-native-community/async-storage'
import styles from './styles'
import ListItem from '@components/listItemOrg'

const organizations = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    setRefreshing(true)
    const username = await AsyncStorage.getItem('@githuber:username')
    const {data} = await Api.get(`/users/${username}/orgs`)
    setData(data)
    setLoading(false)
    setRefreshing(false)
  }

  return (
    <View style={styles.container}>
      <Header title="Organizações" />
      {loading ? (
        <ActivityIndicator style={styles.loading} />
      ) : (
        <FlatList
          data={data}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => <ListItem item={item} />}
          contentContainerStyle={styles.list}
          onRefresh={() => getData()}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
          refreshing={refreshing}
        />
      )}
    </View>
  )
}

const TabBarIcon = ({tintColor}) => (
  <Icon name="building" size={20} color={tintColor} />
)

TabBarIcon.propTypes = {
  tintColor: propTypes.string.isRequired,
}

organizations.navigationOptions = {
  tabBarIcon: TabBarIcon,
}

export default organizations
