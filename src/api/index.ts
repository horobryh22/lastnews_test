import axios from 'axios';

export const instance = axios.create({
    baseURL: `https://turgenevmus.ru/wp-json/wp/v2/posts?_fields=id,date,excerpt,title,link`,
});
