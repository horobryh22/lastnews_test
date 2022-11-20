import { memo, ReactElement } from 'react';

import { PostItem } from './postItem/PostItem';
import { PostItemSkeleton } from './postItem/PostItemSkeleton';
import classes from './PostsList.module.scss';

import { PostsView } from 'enums';
import { useTypedSelector } from 'hooks';
import { selectPostsIsLoading } from 'store/selectors';
import { Post } from 'store/types';
import { classNames } from 'utils';

interface PostsListProps {
    className?: string;
    posts: Post[];
}

const getSkeletons = (view: PostsView): ReactElement[] =>
    new Array(PostsView.TILE === view ? 8 : 3)
        .fill(0)
        .map((item, i) => <PostItemSkeleton key={i} view={view} />);

export const PostsList = memo((props: PostsListProps): ReactElement => {
    const { className, posts } = props;

    const isLoading = useTypedSelector(selectPostsIsLoading);
    const view = PostsView.LIST;

    const mappedPosts = posts.map(post => (
        <PostItem key={post.id} post={post} view={view} />
    ));

    if (isLoading) {
        return (
            <div className={classNames('', {}, [className, classes[view]])}>
                {getSkeletons(view)}
            </div>
        );
    }

    return (
        <div className={classNames('', {}, [className, classes[view]])}>
            {mappedPosts}
        </div>
    );
});
