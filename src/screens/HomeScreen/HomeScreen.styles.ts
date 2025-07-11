import {StyleSheet} from 'react-native'

import {ColorType} from '@/theme/Theme'
import {moderateScale, scale, verticalScale} from '@/utils/Responsive'

export const myStyles = (colors: ColorType) => {
  return StyleSheet.create({
    inputContainer: {
      marginBottom: verticalScale(20)
    },
    separator: {
      width: '100%',
      height: verticalScale(10)
    },
    categoryCard: {
      backgroundColor: colors.blue80,
      paddingHorizontal: scale(10),
      paddingVertical: verticalScale(15),
      borderRadius: moderateScale(15),
      marginHorizontal: scale(5),
      marginBottom: verticalScale(15)
    },
    categoryText:{
      fontWeight: '700',
      fontSize: moderateScale(14),
      color: colors.white
    }
  })
}
