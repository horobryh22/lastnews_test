import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { postsReducer } from 'store/slices';

const postsConfig = {
    key: 'posts',
    storage,
    whitelist: ['view'],
};

const rootReducer = combineReducers({
    posts: persistReducer(postsConfig, postsReducer),
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);

export type StateSchema = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
