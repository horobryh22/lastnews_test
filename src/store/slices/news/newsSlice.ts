import { createSlice } from '@reduxjs/toolkit';

import { fetchNews } from '../../middlewares';
import { NewsStateSchema } from '../../types';

const initialState: NewsStateSchema = {
    news: undefined,
    error: undefined,
    isLoading: false,
};

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(fetchNews.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchNews.pending, state => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchNews.fulfilled, (state, action) => {
                state.error = undefined;
                state.isLoading = false;
                state.news = action.payload;
            }),
});

export const { actions: newsActions } = newsSlice;
export const { reducer: newsReducer } = newsSlice;
