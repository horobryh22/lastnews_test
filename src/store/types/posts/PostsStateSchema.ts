import { PostsView } from 'enums';

export interface PostsStateSchema {
    posts?: any;
    isLoading: boolean;
    error?: string;
    shownPostsCount: number;
    view: PostsView;
}
