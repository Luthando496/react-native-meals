import React,{useState,useContext} from 'react';
import { StyleSheet, FlatList,StatusBar} from 'react-native';
import { Searchbar } from 'react-native-paper';
import ResturantInfoCard from '../Components/ResturantInfoCard';
import styled from 'styled-components/native';
import {SafeArea} from '../../../Utils/SafeArea'
import { RestaurantsContext } from '../../../Services/Restuarants/RestaurantContext';


const SearchContainer = styled.View`
        padding:16px;
        `;
const ListContainer = styled.View`
padding:16px;
flex:1;
backgroundColor: white;
`;


const RestaurantScreen = (props) => {
  const {restaurants,isLoading,error} = useContext(RestaurantsContext)
  // console.log(restaurants)
    const [searchQuery, setSearchQuery] = useState('');

    // if(!latoLoaded || !oswaldLoaded){
    //     return null;
    // }

    const onChangeSearch = query => setSearchQuery(query);
    console.log(searchQuery)

  return (
    <SafeArea >
      <SearchContainer>
      <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
      </SearchContainer>
      <ListContainer >
      <FlatList  
      data={restaurants}
      keyExtractor={item => item.name}
      renderItem={item => (
        <ResturantInfoCard restaurant={item}  />

      )}
        />
      </ListContainer>
    </SafeArea>
  )
}



export default RestaurantScreen