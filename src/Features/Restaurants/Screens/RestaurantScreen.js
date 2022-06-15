import React,{useState} from 'react';
import { StyleSheet, FlatList,StatusBar} from 'react-native';
import { Searchbar } from 'react-native-paper';
import ResturantInfoCard from '../Components/ResturantInfoCard';
import styled from 'styled-components/native';
import {SafeArea} from '../../../Utils/SafeArea'


const SearchContainer = styled.View`
        padding:16px;
        `;
const ListContainer = styled.View`
padding:16px;
flex:1;
backgroundColor: white;
`;


const RestaurantScreen = (props) => {

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
      data={[{name:1},{name:2},{name:3},{name:4},{name:5},{name:6}]}
      keyExtractor={item => item.name}
      renderItem={props => (
        <ResturantInfoCard  />

      )}
        />
      </ListContainer>
    </SafeArea>
  )
}



export default RestaurantScreen