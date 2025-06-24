import {StyleSheet} from 'react-native'

import {Fonts} from '@/theme/Fonts'
import {type ColorType} from '@/theme/Theme'
import {moderateScale, scale, verticalScale} from '@/utils/Responsive'

export const myStyles = (colors: ColorType) => {
  return StyleSheet.create({
    mainContainer: {
      // width: '100%'
    },
    textInputContainer: {
      flexDirection: 'row',
      alignSelf: 'flex-start',
      width: '100%',
      height: verticalScale(44),
      borderWidth: 1,
      borderRadius: moderateScale(4),
      borderColor: colors.grayD0,
      marginTop: verticalScale(10),
      paddingHorizontal: scale(10)
    },
    inputField: {
      flex: 1,
      margin: 0,
      padding: 0,
      fontSize: moderateScale(14),
      fontFamily: Fonts.medium,
      color: colors.black10
    },
    textOnlyInputField: {
      fontSize: moderateScale(14),
      fontFamily: Fonts.medium,
      color: colors.black10
    },
    textOnlyContainer: {
      flex: 1,
      justifyContent: 'center'
    },
    iconContainer: {
      height: verticalScale(20),
      width: verticalScale(20),
      marginVertical: verticalScale(10)
    },
    eyeIcon: {
      width: '100%',
      height: '100%'
    },
    labelText: {
      fontFamily: Fonts.medium,
      fontSize: moderateScale(14),
      color: colors.gray34
    },
    multiLineStyle: {
      alignSelf: 'flex-start',
      textAlignVertical: 'top',
      height: '100%',
      paddingTop: verticalScale(8)
    },
    errorMessage: {
      color: colors.redDC,
      fontSize: moderateScale(12),
      fontFamily: Fonts.regular,
      paddingTop: verticalScale(12)
    },
    container: {
      marginTop: verticalScale(10)
    },
    subTextInputView: {
      width: '18%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      borderRightWidth: 1,
      borderColor: colors.grayD0,
      marginRight: scale(12),
      marginLeft: scale(-10),
      padding: 0
    },
    subInputText: {
      fontFamily: Fonts.regular,
      fontSize: moderateScale(14),
      color: colors.gray66
    },
    errorMessageText: {
      fontFamily: Fonts.regular,
      fontSize: moderateScale(12),
      color: colors.redD9
    },
    requiredStyle: {
      color: colors.redD9
    },
    textInput: {
      flex: 1,
      flexDirection: 'row'
    },
    rightIconStyle: {
      width: scale(12),
      height: scale(12),
      alignSelf: 'center',
      marginLeft: scale(5)
    }
  })
}
