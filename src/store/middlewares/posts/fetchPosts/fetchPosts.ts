import { createAsyncThunk } from '@reduxjs/toolkit';

import { Post } from '../../../types';

import { instance } from 'api';

export const fetchPosts = createAsyncThunk<Post[], void, { rejectValue: string }>(
    'posts/fetchPosts',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await instance.get('/posts');

            if (!data) {
                throw new Error('Не удалось получить статьи');
            }

            return data;
        } catch (e) {
            return rejectWithValue('Не удалось получить статьи');
        }
    },
);
