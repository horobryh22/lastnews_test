import { StateSchema } from 'store/store';
import { Post } from 'store/types';

export const selectPosts = (state: StateSchema): Post[] => state.posts.posts || [];
