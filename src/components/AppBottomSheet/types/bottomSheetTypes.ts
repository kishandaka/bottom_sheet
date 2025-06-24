import type { Item } from '@/components/Card/Card'
import {type StyleProp, type ViewStyle} from 'react-native'

export interface AppBottomSheetProps {
  data: Item
  isVisible: boolean
  onClose: () => void
  style?: StyleProp<ViewStyle>
  innerStyle?: StyleProp<ViewStyle>
}
