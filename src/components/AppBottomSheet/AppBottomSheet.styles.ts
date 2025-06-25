import {StyleSheet} from 'react-native'

import {type ColorType} from '@/theme/Theme'
import {moderateScale, scale, verticalScale} from '@/utils/Responsive'

export const myStyles = (colors: ColorType) => {
  return StyleSheet.create({
    modelContainer: {
      justifyContent: 'flex-end',
      margin: 0
    },
    mainContainer: {
      width: '100%',
      maxHeight: '80%',
      borderTopLeftRadius: moderateScale(20),
      borderTopRightRadius: moderateScale(20),
      backgroundColor: colors.white,
      paddingVertical: verticalScale(10)
    },
    notchStyle: {
      width: scale(46),
      height: verticalScale(4),
      backgroundColor: colors.whiteEA,
      borderRadius: moderateScale(30),
      alignSelf: 'center',
      marginBottom: verticalScale(5)
    },
    innerContainer: {
      width: '100%',
      paddingHorizontal: scale(15),
      rowGap: verticalScale(10)
    },
    title: {
      fontWeight: '700',
      fontSize: moderateScale(18),
      color: colors.black
    },
    descStyle: {
      fontWeight: '500',
      fontSize: moderateScale(14),
      color: colors.black10
    }
  })
}
