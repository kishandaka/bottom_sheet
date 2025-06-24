import {
  type ColorValue,
  type ImageResizeMode,
  type ImageSourcePropType,
  type ImageStyle,
  type StyleProp,
  type ViewStyle
} from 'react-native'

export interface AppImageProps {
  source: ImageSourcePropType
  style?: StyleProp<ViewStyle>
  resizeMode?: ImageResizeMode
  width?: number | undefined
  height?: number | undefined
  tintColor?: ColorValue
  onPress?: () => void
  disabled?: boolean
  iconStyle?: StyleProp<ImageStyle>
}
