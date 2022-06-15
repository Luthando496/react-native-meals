import React,{useState,useEffect,useCallback} from 'react'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';
import RestaurantScreen from './src/Features/Restaurants/Screens/RestaurantScreen';
import {ThemeProvider} from 'styled-components/native' 
import {theme} from './src/Infastructure/Theme/index'
import {useFonts as useOswald,Oswald_400Regular} from '@expo-google-fonts/inter';
import {useFonts as useLato,Lato_400Regular} from '@expo-google-fonts/inter';
import * as Font from 'expo-font';
import {useFonts} from 'expo-font'
import AppLoading from 'expo-app-loading'
import * as SplashScreen from 'expo-splash-screen';
import TabNavigator from './src/Tab Navigators/TabNavigator';






const App =()=> {
  let [oswaldLoaded] = useOswald({Oswald_400Regular,});
  // // let [latoLoaded] = useLato({Lato_400Regular,});
  // const [loaded,setLoaded] = useState(false)
  
    const [loaded] = useFonts({
      Montserrat: require('./src/Utils/Oswald-Regular.ttf'),
      Quicksand: require('./src/Utils/Quicksand-BoldItalic.otf'),
    });
  
    if (!loaded) {
      return null;
    }
  
  
  return (
    <>
    <ThemeProvider theme={theme}>
    <PaperProvider>
      <TabNavigator />
      {/* <RestaurantScreen /> */}
    <ExpoStatusBar style='auto'/>
    </PaperProvider>
    </ThemeProvider>
    </>
  );
}



export default App;