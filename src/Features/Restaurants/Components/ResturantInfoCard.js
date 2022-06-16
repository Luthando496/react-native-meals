import React from 'react';
import {Text,View} from 'react-native'
import {Card} from 'react-native-paper'
import {SvgXml} from 'react-native-svg'
import styled from 'styled-components/native';
import {SvgCssUri  } from 'react-native-svg';
import Ionicons from '@expo/vector-icons/Ionicons';


const star = require('../../../../assets/star')

const Title = styled(Text)`
    color:${props => props.theme.colors.ui.primary};
    font-family:Montserrat;
    font-size:${props => props.theme.fontSizes.body}

`;
const Address = styled(Text)`
    color:${props => props.theme.colors.ui.primary};
    font-family:Quicksand;
    font-size:${props => props.theme.fontSizes.caption}

`;

const Info = styled.View`
padding:10px;

`;
const Star = styled.View`
padding:2px;
flex-direction:row;
justify-content:space-between
`;

const ResturantCard = styled(Card)`
        backgroundColor:white;
        margin-bottom:20px;

`;

const StarContainer = styled(View)`
justify-content:space-between;
flex-direction:row;

`;

const CardCover = styled(Card.Cover)`
            padding:10px;
            backgroundColor:white
        `;


const ResturantInfoCard = ({restaurant = {}}) => {
    
    
    // const ratingA = Array.from(new Array(Math.floor(10)).toString())
    // console.log(ratingA)
    const ratingA = [1,2,3,4]
    
    const {name='MY NOBR',photos=['https://www.foodiesfeed.com/wp-content/uploads/2021/10/carrot-cake-with-fresh-fruits-777x1024.jpg.webp'],icon,vicinity="Perm Gardens",rating=5,isOpenNow=true,isClosedTemporarily=''} = restaurant;

    // console.log(restaurant.vicinity)

    
    return (
    <ResturantCard elevation={5}>
        <CardCover  source={{uri:photos[0]}} />
        <Card.Content>
            <Info>
        <Title>{name}</Title>
        <Star>
            <StarContainer>
                {ratingA && ratingA.map(i=>(
                        <Ionicons name="md-star" size={24} color="gold" key={i} />

                        
                        ))}
                        </StarContainer>

        {isOpenNow && <Ionicons name="lock-open-outline" size={24} color="black" />}
        {!isOpenNow && <Ionicons name="lock-closed-sharp" size={24} color="black" />}
                </Star>


                
        <Address>{vicinity}</Address>

            </Info>

        </Card.Content>

    </ResturantCard>
  )
}





export default ResturantInfoCard;