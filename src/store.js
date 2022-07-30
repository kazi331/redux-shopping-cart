import { configureStore } from '@reduxjs/toolkit';
import blogSlice from './features/blog/blogSlice';
import cartSlice from './features/cart/cartSlice';
export const store = configureStore({
    reducer: {
        cart: cartSlice,
        blogs: blogSlice,

    }
});