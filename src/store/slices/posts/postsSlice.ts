import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { fetchPosts } from '../../middlewares';
import { PostsStateSchema } from '../../types';

import { PostsView } from 'enums';

const initialState: PostsStateSchema = {
    posts: undefined,
    error: undefined,
    isLoading: false,
    view: PostsView.TILE,
};

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPostsView: (state, action: PayloadAction<PostsView>) => {
            state.view = action.payload;
        },
    },
    extraReducers: builder =>
        builder
            .addCase(fetchPosts.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchPosts.pending, state => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.error = undefined;
                state.isLoading = false;
                state.posts = action.payload;
            }),
});

export const { actions: postsActions } = postsSlice;
export const { reducer: postsReducer } = postsSlice;
