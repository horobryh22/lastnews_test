import axios from 'axios';

export const instance = axios.create({
    baseURL: `http://turgenevmus.ru/wp-json/wp/v2`,
});
