import React from 'react'
import {createStackNavigator,TransitionPresets } from '@react-navigation/stack'
import RestaurantScreen from '../Features/Restaurants/Screens/RestaurantScreen';
import RestaurantDetail from '../Features/Restaurants/Screens/RestaurantDetail';


const Stack = createStackNavigator();


const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{...TransitionPresets.ScaleFromCenterAndroid}}>
      <Stack.Screen options={{headerShown:false}} name="HomeScreen" component={RestaurantScreen} />
      <Stack.Screen name="Details" component={RestaurantDetail} />
      </Stack.Navigator>
  )
}


export default HomeNavigator;