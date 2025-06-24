import React from 'react'
import {ActivityIndicator, FlatList, Text, TouchableOpacity, View} from 'react-native'

import {myStyles} from './SearchScreen.styles'
import {AppContainer, AppHeader, AppTextInput} from '@/components'
import {useColor} from '@/hooks'
import {CommonStyles} from '@/utils'
import useSearchScreen from './hooks/useSearchScreen'

interface SearchScreenProps {}

const SearchScreen = ({}: SearchScreenProps) => {
  const colors = useColor()
  const styles = myStyles(colors)
  const {mainState, onChangeSearch, onPresSelect} = useSearchScreen()

  const {searchText, locationList, isLoading} = mainState

  console.log('isLoading', isLoading)

  const renderSearch = () => {
    return (
      <AppTextInput
        title="Search Location"
        placeholder="Search ..."
        value={searchText}
        onChangeText={onChangeSearch}
      />
    )
  }

  const renderItem = ({item}: any) => {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => {
          onPresSelect(item)
        }}
      >
        <Text>{item?.ADDRESS}</Text>
      </TouchableOpacity>
    )
  }

  const renderSeparator = () => {
    return <View style={styles.separator} />
  }

  const renderList = () => {
    if (isLoading) {
      return (
        <View style={styles.centerContainer}>
          <ActivityIndicator size={'large'} color={colors.black} />
        </View>
      )
    }

    return (
      <View style={CommonStyles.flex}>
        <FlatList
          data={locationList}
          renderItem={renderItem}
          keyExtractor={(_, index) => `location_${index}`}
          ItemSeparatorComponent={renderSeparator}
          showsVerticalScrollIndicator={false}
        />
      </View>
    )
  }

  return (
    <AppContainer>
      <AppHeader headerTitle="Search Location" />
      <View style={CommonStyles.mainContainer}>
        {renderSearch()}
        {renderSeparator()}
        {renderList()}
      </View>
    </AppContainer>
  )
}

export default SearchScreen
