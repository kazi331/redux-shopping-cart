import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
    isLoading: true
}
const url = 'https://course-api.com/react-useReducer-cart-project'
// const url = 'https://jsonplaceholder.typicode.com/posts'

export const loadProducts = createAsyncThunk('cart/loadProducts', async () => {
    return fetch(url).then(res => res.json())
});

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
                amount += item.amount;
                total += item.price * item.amount;
            })
            state.total = total;
            state.amount = amount;
        }
    },
    extraReducers: {
        [loadProducts.pending]: (state, action) => {
            state.status = 'loading'
            state.isLoading = true
        },
        [loadProducts.fulfilled]: (state, { payload }) => {
            state.cartItems = payload
            state.isLoading = false
        },
        [loadProducts.rejected]: (state, action) => {
            state.status = 'failed'
        }
    }

});

// console.log(cartSlice);

export const { clearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer