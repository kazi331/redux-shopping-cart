import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../components/cartItems';
const initialState = {
    cartItems: cartItems,
    amount: 0,
    total: 0,
    isLoading: true
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: state => {
            state.cartItems = [];
        },
        removeItem: (state, action) => {
            // console.log(action)
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter(item => itemId !== item.id);

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
        },
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach(item => {
                amount += item.amount ;
                total += item.price * item.amount;
            })
            state.total = total;
            state.amount = amount;
        }
    }

});

// console.log(cartSlice);

export const { clearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer