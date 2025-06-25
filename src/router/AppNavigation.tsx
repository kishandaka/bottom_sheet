import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import * as View from '@/screens'
import {Screen} from '@/utils'

const Stack = createStackNavigator()

const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={Screen.HomeScreen}>
      <Stack.Screen name={Screen.HomeScreen} component={View.HomeScreen} />
    </Stack.Navigator>
  )
}

export default AppNavigation
