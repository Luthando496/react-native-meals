import React,{useState,useContext} from 'react';
import { TouchableOpacity, FlatList} from 'react-native';
import { Searchbar } from 'react-native-paper';
import ResturantInfoCard from '../Components/ResturantInfoCard';
import styled from 'styled-components/native';
import {SafeArea} from '../../../Utils/SafeArea'
import { RestaurantsContext } from '../../../Services/Restuarants/RestaurantContext';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import { Search } from '../Components/searchComponent';

const SearchContainer = styled.View`
        padding:16px;
        `;
const ListContainer = styled.View`
padding:16px;
flex:1;
backgroundColor: white;

`;
const Loader = styled.View`
position:absolute;
top:50%;
left:50%;
`


const RestaurantScreen = ({navigation}) => {
  const {restaurants,isLoading,error} = useContext(RestaurantsContext)
  // console.log(restaurants)
    const [searchQuery, setSearchQuery] = useState('');

    // if(!latoLoaded || !oswaldLoaded){
    //     return null;
    // }

    const onChangeSearch = query => setSearchQuery(query);
    console.log(searchQuery)

    // s

  return (
    <SafeArea >

      <Search />
      <ListContainer >
        {isLoading && <Loader>
          <ActivityIndicator size='large' animating={true} color='pink' />
        </Loader> }
      <FlatList  
      data={restaurants}
      keyExtractor={item => item.name}
      renderItem={item => (
        <TouchableOpacity onPress={()=> navigation.navigate('Details',{restaurant:item.item})}>
        <ResturantInfoCard restaurant={item.item}  />
        </TouchableOpacity>

      )}
        />
      </ListContainer>
    </SafeArea>
  )
}



export default RestaurantScreen