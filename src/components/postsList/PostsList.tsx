import { memo, ReactElement } from 'react';

import { PostItem } from './postItem/PostItem';
import classes from './PostsList.module.scss';

import { PostsView } from 'enums';
import { Post } from 'store/types';
import { classNames } from 'utils';

interface PostsListProps {
    className?: string;
    posts: Post[];
}

export const PostsList = memo((props: PostsListProps): ReactElement => {
    const { className, posts } = props;

    const view = PostsView.TILE;

    const mappedPosts = posts.map(post => (
        <PostItem key={post.id} post={post} view={view} />
    ));

    return (
        <div className={classNames('', {}, [className, classes[view]])}>
            {mappedPosts}
        </div>
    );
});
