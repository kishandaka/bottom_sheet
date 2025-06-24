import {StyleSheet} from 'react-native'

import {type ColorType} from '@/theme/Theme'
import {verticalScale} from '@/utils/Responsive'

export const myStyles = (colors: ColorType) => {
  return StyleSheet.create({
    imageView: {
      width: verticalScale(24),
      height: verticalScale(24),
      zIndex: 100
    },
    image: {
      width: '100%',
      height: '100%'
    }
  })
}
