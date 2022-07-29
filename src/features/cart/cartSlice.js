import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../components/cartItems';
const initialState = {
    cartItems: cartItems,
    amount: cartItems.length,
    total: 0,
    isLoading: true
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: state => {
            state.cartItems = [];
            state.amount = state.cartItems.length;
        },
        removeItem: (state, action) => {
            // console.log(action)
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter(item => itemId !== item.id);
            state.amount = state.cartItems.length;

        },
        increase: (state, action) => {
            const itemId = action.payload;
            const productItem = state.cartItems.find(item => item.id === itemId);
            productItem.amount += 1;
        },
        decrease: (state, action) => {
            const itemId = action.payload;
            const productItem = state.cartItems.find(item => item.id === itemId);
            productItem.amount -= 1;
        }
    }

});

// console.log(cartSlice);

export const { clearCart, removeItem, increase, decrease } = cartSlice.actions;
export default cartSlice.reducer