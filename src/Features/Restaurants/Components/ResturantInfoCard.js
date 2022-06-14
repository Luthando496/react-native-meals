import React from 'react';
import {Text,StyleSheet} from 'react-native'
import {Card} from 'react-native-paper'
import styled from 'styled-components/native';





const ResturantInfoCard = ({restaurant = {}}) => {
    
    const Title = styled.Text`
        padding:10px;
        color:pink;

    `;


    const {name='MY NOBR',photos=['https://www.foodiesfeed.com/wp-content/uploads/2021/10/carrot-cake-with-fresh-fruits-777x1024.jpg.webp'],icon,address="Perm Gardens",rating=5,isOpenNow=true,isClosedTemporarily=''} = restaurant
  return (
    <Card style={styles.card} elevation={5}>
        <Card.Cover style={styles.cover} source={{uri:photos[0]}} />
        <Card.Content>
        <Title>{name}</Title>

        </Card.Content>

    </Card>
  )
}


const styles = StyleSheet.create({
    card:{
        backgroundColor:'white'
    },
    cover:{
        padding:10,
        backgroundColor:'white'
    },
    title:{
        padding:10
    }
})


export default ResturantInfoCard;