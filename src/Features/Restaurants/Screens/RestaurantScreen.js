import React,{useState} from 'react';
import { StyleSheet, Text, View,SafeAreaView,Platform ,StatusBar} from 'react-native';
import { Searchbar } from 'react-native-paper';
import ResturantInfoCard from '../Components/ResturantInfoCard';


const RestaurantScreen = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = query => setSearchQuery(query);
    console.log(searchQuery)
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
      <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
      </View>
      <View style={styles.list}>
      <ResturantInfoCard />
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop:StatusBar.currentHeight
  
    },
    search:{
      padding:16,
    //   backgroundColor:'green'
    },
    list:{
      padding:16,
      flex:1,
      backgroundColor:'blue'
    }
  
  });

export default RestaurantScreen