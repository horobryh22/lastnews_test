import { StateSchema } from 'store/store';

export const selectShownPostsCount = (state: StateSchema): number =>
    state.posts.shownPostsCount;
