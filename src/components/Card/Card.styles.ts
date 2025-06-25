import {StyleSheet} from 'react-native'

import {ColorType} from '@/theme/Theme'
import {moderateScale, scale, verticalScale} from '@/utils/Responsive'
import {Fonts} from '@/theme/Fonts'
import { version } from 'react'

export const myStyles = (colors: ColorType) => {
  return StyleSheet.create({
    cardContainer: {
      padding: scale(15),
      backgroundColor: colors.blueE6,
      borderRadius: moderateScale(15),
      rowGap:verticalScale(10)
    },
    title: {
      fontWeight: '700',
      fontSize: moderateScale(16),
      color: colors.black
    },
    descStyle: {
      fontWeight: '500',
      fontSize: moderateScale(14),
      color: colors.black10
    }
  })
}
