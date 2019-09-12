import React from 'react'

import {View, Text, TextInput, TouchableOpacity, StatusBar} from 'react-native'
import styles from './styles'
import {colors} from '@styles'

const welcome = () => (
  <View style={styles.container}>
    <StatusBar barStyle="light-content" backgroundColor={colors.secondary} />
    <Text style={styles.title}>Bem-vindo</Text>
    <Text style={styles.text}>Para continuar insira seu usuário do GitHub</Text>
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Digite seu usuário"
        underlineAndroidColor="Transparent"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonLabel}>Continuar</Text>
      </TouchableOpacity>
    </View>
  </View>
)

export default welcome
