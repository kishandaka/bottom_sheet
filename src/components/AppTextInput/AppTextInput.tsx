import React, {forwardRef} from 'react'
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native'

import AppImage from '../AppImage/AppImage'
import useAppTextInput from './hooks/useAppTextInput'
import {type AppTextInputPropType} from './types/AppTextInputTypes'
import {Images} from '@/utils'

const AppTextInput = forwardRef((props: AppTextInputPropType, ref: any) => {
  const {showPassword, colors, styles, onToggleShowPassword} = useAppTextInput()
  const {
    isPassword,
    title,
    titleTextStyle,
    style,
    value,
    textStyle,
    errorMessage,
    onChangeText,
    isMultiLine,
    numberOfLines,
    containerStyle,
    rightIcon,
    getViewRef,
    editable = true,
    isTouchable = false,
    onPress = () => {}
  } = props

  const renderTextInput = () => {
    return (
      <TextInput
        {...props}
        style={[styles.inputField, textStyle, isMultiLine && styles.multiLineStyle]}
        secureTextEntry={!showPassword && isPassword}
        value={value}
        ref={ref}
        onChangeText={onChangeText}
        multiline={isMultiLine}
        placeholderTextColor={colors.gray98}
        numberOfLines={isMultiLine ? numberOfLines : 1}
        autoCapitalize="none"
      />
    )
  }

  const renderTextOnly = () => {
    return (
      <TouchableOpacity disabled={!isTouchable} onPress={onPress} style={styles.textOnlyContainer}>
        <Text
          numberOfLines={1}
          style={[styles.textOnlyInputField, textStyle, isMultiLine && styles.multiLineStyle]}
        >
          {value}
        </Text>
      </TouchableOpacity>
    )
  }

  const onViewLayout = (_event: any) => {}

  return (
    <View
      ref={(ref) => {
        if (getViewRef) {
          getViewRef(ref)
        }
      }}
      onLayout={onViewLayout}
      style={[styles.container, containerStyle]}
    >
      {title && <Text style={[styles.labelText, titleTextStyle]}>{title}</Text>}
      <View style={[styles.textInputContainer, style]}>
        {editable ? renderTextInput() : renderTextOnly()}
        {isPassword && (
          <TouchableOpacity onPress={onToggleShowPassword} style={styles.iconContainer}>
            <Image
              source={showPassword ? Images.viewPass : Images.hidePass}
              style={styles.eyeIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
        {rightIcon && <AppImage source={rightIcon} style={styles.rightIconStyle} />}
      </View>
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
    </View>
  )
})

export default AppTextInput
