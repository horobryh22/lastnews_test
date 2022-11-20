import { StateSchema } from 'store/store';
import { Post } from 'store/types';

export const selectAllPosts = (state: StateSchema): Post[] => state.posts.posts || [];
