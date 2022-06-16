import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Icon from '@expo/vector-icons/FontAwesome';
import Map from '../Components/Map';
import Settings from '../Components//Settings';

import HomeNavigator from '../StackNavigator/HomeNavigator';


const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <NavigationContainer tabBarOptions={{
        showLabel:false,
        keyboardHidesTabBar:true
    }}>
    <Tab.Navigator screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:'pink'}}>
            
    <Tab.Screen name="Home" component={HomeNavigator} options={{
        headerShown:false,
        tabBarIcon:({color})=>(
            <Ionicons name='home' style={{color}} size={30} />
        )
    }} />

        <Tab.Screen name="Map" component={Map} options={{
            headerShown:false,
        tabBarIcon:({color})=>(
            <Icon name='map' style={{color}} size={30} />
        )
    }} />

        <Tab.Screen name="Settings" component={Settings} options={{
            headerShown:false,
        tabBarIcon:({color})=>(
            <Icon name='cog' style={{color}} size={30} />
        )
    }} />


    </Tab.Navigator>
    </NavigationContainer>
  )
}

export default TabNavigator;