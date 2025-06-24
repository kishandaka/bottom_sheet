import React from 'react'
import {
  Image,
  type StyleProp,
  Text,
  type TextStyle,
  TouchableOpacity,
  type ViewStyle
} from 'react-native'

import {myStyles} from './AppButton.style'
import {useColor} from '@/hooks'

interface Props {
  title: string
  onPress: () => void
  style?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
  isDisable?: boolean
  image?: any
}

const AppButton = (props: Props) => {
  const colors = useColor()
  const styles = myStyles(colors)
  const {title, style, onPress, textStyle, isDisable, image} = props

  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress} disabled={isDisable}>
      {image && <Image source={image} resizeMode="contain" style={styles.iconStyle} />}
      <Text style={[styles.titleTxt, textStyle]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default AppButton

AppButton.defaultProps = {
  style: {},
  textStyle: {},
  isDisable: false
}
