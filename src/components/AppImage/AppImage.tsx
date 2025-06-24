import React from 'react'
import {Image, TouchableOpacity} from 'react-native'

import {myStyles} from './AppImage.styles'
import {type AppImageProps} from './types/appImageTypes'
import {useColor} from '@/hooks'
import {verticalScale} from '@/utils/Responsive'

const AppImage = (props: AppImageProps) => {
  const colors = useColor()
  const styles = myStyles(colors)
  const {
    style,
    resizeMode,
    source,
    width = 24,
    height = 24,
    tintColor,
    onPress = () => {},
    disabled,
    iconStyle
  } = props

  return (
    <TouchableOpacity
      style={[
        styles.imageView,
        {width: verticalScale(width), height: verticalScale(height)},
        style
      ]}
      onPress={onPress}
      disabled={disabled}
      hitSlop={{left: 15, right: 15, top: 15, bottom: 15}}
    >
      <Image
        source={source}
        resizeMode={resizeMode}
        style={[styles.image, iconStyle, tintColor ? {tintColor} : {}]}
      />
    </TouchableOpacity>
  )
}

AppImage.defaultProps = {
  resizeMode: 'contain',
  style: {},
  onPress: () => {},
  disabled: true
}

export default AppImage
