import React from 'react'
import {Image, type StyleProp, Text, TouchableOpacity, View, type ViewStyle} from 'react-native'

import {myStyles} from './AppHeader.styles'
import {useColor} from '@/hooks'
import {Images} from '@/utils'
import {useNavigation} from '@react-navigation/native'

interface HeaderComponentProps {
  headerTitle?: string
  isBack?: boolean
  onPressBack?: () => void
  iconStyle?: StyleProp<ViewStyle>
  style?: StyleProp<ViewStyle>
}

const AppHeader = ({headerTitle, iconStyle, style, isBack = true}: HeaderComponentProps) => {
  const colors = useColor()
  const styles = myStyles(colors)
  const navigation: any = useNavigation()

  const onPressBack = () => {
    navigation.pop()
  }

  return (
    <View style={[styles.headerView, style]}>
      {isBack && (
        <TouchableOpacity style={[styles.imgView, iconStyle]} onPress={onPressBack} hitSlop={15}>
          <Image source={Images.backIcon} resizeMode="contain" style={styles.img} />
        </TouchableOpacity>
      )}
      <Text style={styles.headerTxt}>{headerTitle}</Text>
    </View>
  )
}

export default AppHeader
