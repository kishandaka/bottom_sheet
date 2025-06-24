import {StyleSheet} from 'react-native'

import {ColorType} from '@/theme/Theme'
import {moderateScale, verticalScale} from '@/utils/Responsive'

export const myStyles = (colors: ColorType) => {
  return StyleSheet.create({
    card: {
      padding: moderateScale(10),
      backgroundColor: colors.grayF2,
      borderRadius: moderateScale(15)
    },
    separator: {
      width: '100%',
      height: verticalScale(10)
    },
    centerContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
  })
}
