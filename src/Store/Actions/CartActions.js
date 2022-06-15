import {cartActions} from '../store';



export const addToCart =(data)=>{
    return (dispatch) =>{


        dispatch(cartActions.addCart(data))
        // console.log(getState().cart.items)
        // localStorage.setItem('cart', JSON.stringify(getState().cart.items))
    }
}