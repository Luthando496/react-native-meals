import React,{useState,useEffect,useCallback} from 'react'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';
import {ThemeProvider} from 'styled-components/native' 
import {theme} from './src/Infastructure/Theme/index'
import {useFonts as useOswald,Oswald_400Regular} from '@expo-google-fonts/inter';
import {useFonts as useLato,Lato_400Regular} from '@expo-google-fonts/inter';
import {useFonts} from 'expo-font'
import TabNavigator from './src/Tab Navigators/TabNavigator';
import {restaurantsRequest} from './src/Services/Restuarants/RestuarantServices';
import { RestaurantsContextProvider } from './src/Services/Restuarants/RestaurantContext';
import { LocationContextProvider } from './src/Services/location/location.context';






const App =()=> {
  let [oswaldLoaded] = useOswald({Oswald_400Regular,});


  
    const [loaded] = useFonts({
      Montserrat: require('./src/Utils/Oswald-Regular.ttf'),
      Quicksand: require('./src/Utils/Quicksand-BoldItalic.otf'),
    });
  
    if (!loaded) {
      return null;
    }


    

  
  
  return (
    <>
    <LocationContextProvider>

    <RestaurantsContextProvider >

    <ThemeProvider theme={theme}>
    <PaperProvider>
      <TabNavigator />
      {/* <RestaurantScreen /> */}
    <ExpoStatusBar style='auto'/>
    </PaperProvider>
    </ThemeProvider>
    </RestaurantsContextProvider>
    </LocationContextProvider>
    </>
  );
}



export default App;