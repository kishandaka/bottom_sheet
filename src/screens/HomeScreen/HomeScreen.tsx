import React from 'react'
import {View, FlatList, Text, TouchableOpacity} from 'react-native'

import {myStyles} from './HomeScreen.styles'
import {AppBottomSheet, AppContainer, AppHeader, Card} from '@/components'
import {useColor} from '@/hooks'
import {CommonStyles} from '@/utils'
import useHomeScreen from './hooks/useHomeScreen'

interface HomeScreenProps {}

const HomeScreen = ({}: HomeScreenProps) => {
  const colors = useColor()
  const styles = myStyles(colors)
  const {DATA, CATEGORY, isModalShow, selectedItem, onCloseModal, onPressItem} = useHomeScreen()

  const renderModal = () => {
    if (isModalShow && selectedItem) {
      return <AppBottomSheet data={selectedItem} isVisible={isModalShow} onClose={onCloseModal} />
    }
  }

  const separator = () => <View style={styles.separator} />

  const renderCategory = ({item}: any) => {
    return (
      <TouchableOpacity style={styles.categoryCard}>
        <Text style={styles.categoryText}>{item?.title}</Text>
      </TouchableOpacity>
    )
  }

  const renderCategorySection = () => {
    return (
      <View>
        <FlatList
          data={CATEGORY}
          keyExtractor={(_, index) => `item_${index}`}
          renderItem={renderCategory}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      </View>
    )
  }

  return (
    <AppContainer>
      <AppHeader headerTitle={'Home'} isBack={false} />
      <View style={CommonStyles.mainContainer}>
        {renderCategorySection()}
        <FlatList
          data={DATA}
          keyExtractor={(_, index) => `item_${index}`}
          renderItem={({item}) => <Card item={item} onPress={onPressItem} />}
          ItemSeparatorComponent={separator}
          showsVerticalScrollIndicator={false}
        />
      </View>
      {renderModal()}
    </AppContainer>
  )
}

export default HomeScreen
