import { StateSchema } from 'store/store';

export const selectPostsIsLoading = (state: StateSchema): boolean =>
    state.posts.isLoading;
