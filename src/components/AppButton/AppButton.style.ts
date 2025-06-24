import {StyleSheet} from 'react-native'

import {Fonts} from '@/theme/Fonts'
import {type ColorType} from '@/theme/Theme'
import {moderateScale, scale, verticalScale} from '@/utils/Responsive'

export const myStyles = (colors: ColorType) => {
  return StyleSheet.create({
    container: {
      height: verticalScale(41),
      width: '100%',
      backgroundColor: colors.primary,
      borderRadius: moderateScale(4),
      justifyContent: 'center',
      alignItems: 'center'
    },
    titleTxt: {
      fontSize: moderateScale(14),
      color: colors.whiteFC,
      fontFamily: Fonts.semi_bold
    },
    iconStyle: {
      height: scale(20),
      width: scale(20),
      marginRight: scale(8)
    }
  })
}
