import {type StyleProp, type TextInputProps, type TextStyle, type ViewStyle} from 'react-native'

export interface AppTextInputPropType extends TextInputProps {
  style?: StyleProp<ViewStyle>
  isPassword?: boolean
  title?: string
  isMultiLine?: boolean
  numberOfLines?: number
  textStyle?: StyleProp<TextStyle>
  errorMessage?: string
  containerStyle?: StyleProp<ViewStyle>
  rightIcon?: number
  titleTextStyle?: StyleProp<TextStyle>
  getViewRef?: (ref: any) => void
  isTouchable?: boolean
}
