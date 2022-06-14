import React,{useState} from 'react'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';
import RestaurantScreen from './src/Features/Restaurants/Screens/RestaurantScreen';


export default function App() {
 
  return (
    
    <PaperProvider>
    <>
    <RestaurantScreen />
    <ExpoStatusBar style='auto'/>
    </>
    </PaperProvider>
  );
}


