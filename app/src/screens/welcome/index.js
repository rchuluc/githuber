import React, {useState} from 'react'

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Alert,
  ActivityIndicator,
} from 'react-native'
import styles from './styles'
import {colors} from '@styles'
import Api from '@services/api'
import AsyncStorage from '@react-native-community/async-storage'

const welcome = ({navigation}) => {
  const [username, setUsername] = useState('')
  const [loading, setLoading] = useState(false)

  const checkUserExists = async username => {
    const user = await Api.get(`/users/${username}`)
    return user
  }

  const saveUser = async username => {
    await AsyncStorage.setItem('@githuber:username', username)
  }

  const signIn = async () => {
    setLoading(true)
    try {
      await checkUserExists(username)
      await saveUser(username)
      navigation.navigate('Repositories')
    } catch (err) {
      Alert.alert('Ops', 'usuário não encontrado')
      setLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.secondary} />
      <Text style={styles.title}>Bem-vindo</Text>
      <Text style={styles.text}>
        Para continuar insira seu usuário do GitHub
      </Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Digite seu usuário"
          underlineAndroidColor="Transparent"
          onChangeText={text => setUsername(text)}
          value={username}
        />
        <TouchableOpacity style={styles.button} onPress={() => signIn()}>
          {loading ? (
            <ActivityIndicator color="#fff" size="small" />
          ) : (
            <Text style={styles.buttonLabel}>Continuar</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default welcome
