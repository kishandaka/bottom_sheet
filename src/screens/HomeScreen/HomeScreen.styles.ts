import {StyleSheet} from 'react-native'

import {ColorType} from '@/theme/Theme'
import { verticalScale } from '@/utils/Responsive'

export const myStyles = (colors: ColorType) => {
  return StyleSheet.create({
    inputContainer:{
      marginBottom : verticalScale(20)
    }
  })
}
