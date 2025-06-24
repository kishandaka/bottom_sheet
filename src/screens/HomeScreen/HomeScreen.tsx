import React from 'react'
import {Text, View} from 'react-native'

import {myStyles} from './HomeScreen.styles'
import {AppButton, AppContainer, AppHeader} from '@/components'
import {useColor} from '@/hooks'
import AppTextInput from '@/components/AppTextInput/AppTextInput'
import {CommonStyles} from '@/utils'
import useHomeScreen from './hooks/useHomeScreen'

interface HomeScreenProps {}

const HomeScreen = ({}: HomeScreenProps) => {
  const colors = useColor()
  const styles = myStyles(colors)
  const {startPoint, endPoint, startError, endError, onPressField, onConform} = useHomeScreen()



  const renderInputs = () => {
    return (
      <View style={styles.inputContainer}>
        <AppTextInput
          title={'Start Point'}
          value={startPoint?.ADDRESS || ''}
          editable={false}
          isTouchable
          onPress={() => {
            onPressField(0)
          }}
          errorMessage={startError}
        />
        <AppTextInput
          title={'End Point'}
          value={endPoint?.ADDRESS || ''}
          onPress={() => {
            onPressField(1)
          }}
          editable={false}
          isTouchable
          errorMessage={endError}
        />
      </View>
    )
  }

  return (
    <AppContainer>
      <AppHeader headerTitle={'Home'} isBack={false} />
      <View style={CommonStyles.mainContainer}>
        {renderInputs()}
        <AppButton title={'Conform'} onPress={onConform} />
      </View>
    </AppContainer>
  )
}

export default HomeScreen
