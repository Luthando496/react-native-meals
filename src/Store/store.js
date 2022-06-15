// import React,{useState} from 'react';
// import {createSlice,configureStore} from '@reduxjs/toolkit';
// import {restaurantsRequest,restaurantsTransform} from '../Services/Restuarants/RestuarantServices';

// const haha =()=>{

// const [restaurants, setRestaurants] = useState([]);
// const [isLoading, setIsLoading] = useState(false);
// const [error, setError] = useState(null);

//     const retrieveRestaurants = () => {
//       setIsLoading(true);
//       setTimeout(() => {
//         restaurantsRequest()
//           .then(restaurantsTransform)
//           .then((results) => {
//             setIsLoading(false);
//             setRestaurants(results);
//           })
//           .catch((err) => {
//             setIsLoading(false);
//             setError(err);
//           });
//       }, 2000);
//     };

// }

// useEffect(() => {
//   retrieveRestaurants();
// }, []);


// const cartStore = createSlice({
//     name:'apiFetch',
//     initialState:{rest:[],err:null},
//     reducers:{
//         loadRest(state,action){

//         },
//         removeCart(state,action){
//             const id = action.payload;
//             const exist = state.cart && state.cart.find(i => i.id === id)

//             if(exist.quantity === 1){
//                 state.cart.filter(i => i !== id)
//             }

//             exist.quantity--
//             exist.price + exist.price
//         }
//     }
// })



// export const cartActions = cartStore.actions


// const store = configureStore({
//     reducer:{
//         rest:cartStore.reducer}
    
// })


// export default store;
