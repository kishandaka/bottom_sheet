import {StyleSheet} from 'react-native'

import {Fonts} from '@/theme/Fonts'
import {type ColorType} from '@/theme/Theme'
import {moderateScale, scale, verticalScale} from '@/utils/Responsive'
import {CommonStyles} from '@/utils'

export const myStyles = (colors: ColorType) => {
  return StyleSheet.create({
    headerView: {
      padding: scale(15),
      borderBottomWidth: moderateScale(1),
      borderColor: colors.primary,
      backgroundColor: colors.primary,
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: scale(5)
    },
    headerTxt: {
      fontFamily: Fonts.medium,
      fontSize: moderateScale(20),
      color: colors.white
    },
    imgView: {
      width: verticalScale(40),
      height: verticalScale(40),
      marginRight: scale(5),
      ...CommonStyles.centerItem
    },
    img: {
      width: '50%',
      height: '50%'
    }
  })
}
