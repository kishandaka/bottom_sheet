import {StyleSheet} from 'react-native'

import {ColorType} from '@/theme/Theme'
import {moderateScale, scale} from '@/utils/Responsive'
import {Fonts} from '@/theme/Fonts'

export const myStyles = (colors: ColorType) => {
  return StyleSheet.create({
    cardContainer: {
      padding: scale(15),
      backgroundColor: colors.blueE6,
      borderRadius: moderateScale(15)
    },
    title: {
      fontWeight: '700',
      fontSize: moderateScale(14)
    },
    descStyle: {
      fontWeight: '500',
      fontSize: moderateScale(12)
    }
  })
}
