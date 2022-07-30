import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'



export const loadPosts = createAsyncThunk('blogs/loadPosts', async () => {
    return fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).catch(err => console.log(err))
});

const blogSlice = createSlice({
    name: 'blogs',
    initialState: {
        blogs: [],
        isLoading: true
    },
    reducers: {
        deletePost: (state, action) => {
            const itemId = action.payload
            state.blogs = state.blogs.filter(item => item.id !== itemId)
        }
    },
    extraReducers: {
        [loadPosts.pending]: (state, action) => {
            state.isLoading = true
        },
        [loadPosts.fulfilled]: (state, action) => {
            state.blogs = action.payload;
            state.isLoading = false;
        },
        [loadPosts.rejected]: (state, action) => {
            state.isLoading = false;
        }
    }

})
// console.log(blogSlice)
export const { deletePost } = blogSlice.actions;
export default blogSlice.reducer;