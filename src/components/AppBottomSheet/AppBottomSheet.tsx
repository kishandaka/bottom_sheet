import React, {useRef, useState} from 'react'
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Dimensions
} from 'react-native'
import Model from 'react-native-modal'

import {myStyles} from './AppBottomSheet.styles'
import {type AppBottomSheetProps} from './types/bottomSheetTypes'
import {useColor} from '@/hooks'
import {moderateScale} from '@/utils/Responsive'

const SCREEN_HEIGHT = Dimensions.get('window').height
const DEFAULT_HEIGHT = SCREEN_HEIGHT * 0.75 // 75% of screen

const AppBottomSheet = (props: AppBottomSheetProps) => {
  const colors = useColor()
  const styles = myStyles(colors)
  const {data, isVisible, onClose, style, innerStyle} = props

  const [contentHeight, setContentHeight] = useState(0)

  const handleContentLayout = (event: any) => {
    setContentHeight(event.nativeEvent.layout.height)
  }

  // Decide the height
  let sheetHeight = contentHeight < DEFAULT_HEIGHT ? contentHeight : DEFAULT_HEIGHT

  const Container = contentHeight < DEFAULT_HEIGHT ? View : ScrollView

  return (
    <Model
      isVisible={isVisible}
      style={styles.modelContainer}
      onBackdropPress={onClose}
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      onBackButtonPress={onClose}
    >
      <KeyboardAvoidingView
        style={[styles.mainContainer, style]}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? moderateScale(10) : 0}
      >
        <TouchableOpacity
          style={styles.notchStyle}
          hitSlop={{bottom: 5, left: 5, right: 5, top: 5}}
          onPress={onClose}
        />
        <Container showsVerticalScrollIndicator={false}>
          <View style={[styles.innerContainer, innerStyle]} onLayout={handleContentLayout}>
            <Text style={styles.title}>{data?.title}</Text>
            <Text style={styles.descStyle}>{data?.description}</Text>
          </View>
        </Container>
      </KeyboardAvoidingView>
    </Model>
  )
}

export default AppBottomSheet
