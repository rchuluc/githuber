import {StyleSheet, Platform} from 'react-native'
import {getStatusBarHeight} from 'react-native-status-bar-height'
import {metrics, colors} from '@styles'

const styles = StyleSheet.create({
  container: {
    height: 54 + getStatusBarHeight(),
    paddingTop: Platform.OS === 'ios' ? getStatusBarHeight() : 0,
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: metrics.basePadding,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.darker,
  },
  icon: {
    color: colors.darker,
  },
})

export default styles
