import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import * as View from '@/screens'
import {Screen} from '@/utils'

const Stack = createStackNavigator()

const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={Screen.HomeScreen}>
      <Stack.Screen name={Screen.HomeScreen} component={View.HomeScreen} />
      <Stack.Screen name={Screen.SearchScreen} component={View.SearchScreen} />
      <Stack.Screen name={Screen.MapViewScreen} component={View.MapViewScreen} />
    </Stack.Navigator>
  )
}

export default AppNavigation
