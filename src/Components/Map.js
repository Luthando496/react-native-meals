import React from 'react'
import {View,Text,StyleSheet,Dimensions} from 'react-native'
import {SafeArea} from '../Utils/SafeArea';
import MapView from 'react-native-maps';


const Map = () => {
  return (
    <SafeArea>
        <Text>Map</Text>
        <MapView style={styles.map} />
    </SafeArea>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default Map;