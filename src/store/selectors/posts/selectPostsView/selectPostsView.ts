import { PostsView } from 'enums';
import { StateSchema } from 'store/store';

export const selectPostsView = (state: StateSchema): PostsView => state.posts.view;
