import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: []
  }

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
          
        const timeId = new Date().getTime();
  
        state.cartItems.push({
            id: timeId,
            productId: action.payload.product.id,
            quantity: action.payload.quantity,
            totalPrice: action.payload.quantity * action.payload.product.price
          })
         },
         deleteItemFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
            cartItem => cartItem.id !== action.payload.cartItemId
          )
         }
  
      }
  })
  
  export const getTotalPrice = state => {
      return state.cart.cartItems.reduce((total, cartItems) => {
          return cartItems.totalPrice + total
      }, 0)
  }

  export const getTotalQuantity = state => {
    return state.cart.cartItems.reduce((total, cartItems) => {
        return cartItems.quantity + total
    }, 0)
}
  
  export const getCartItems = state => state.cart.cartItems;
  export const { addItemToCart, deleteItemFromCart } = cartSlice.actions;
  export default cartSlice.reducer;  
