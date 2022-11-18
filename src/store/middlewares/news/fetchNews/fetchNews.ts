import { createAsyncThunk } from '@reduxjs/toolkit';

import { instance } from 'api';
import { News } from 'types';

export const fetchNews = createAsyncThunk<News[], void, { rejectValue: string }>(
    'news/fetchNews',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await instance.get('/news');

            if (!data) {
                throw new Error('Не удалось получить новости');
            }

            return data;
        } catch (e) {
            return rejectWithValue('Не удалось получить новости');
        }
    },
);
