import { configureStore } from '@reduxjs/toolkit';

import { postsReducer } from 'store/slices';

export const store = configureStore({
    reducer: {
        posts: postsReducer,
    },
});

export type StateSchema = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
