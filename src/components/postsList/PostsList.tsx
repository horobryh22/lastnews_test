import { memo, ReactElement } from 'react';

import { PostItem } from './postItem/PostItem';
import { PostItemSkeleton } from './postItem/PostItemSkeleton';
import classes from './PostsList.module.scss';

import { PostsView } from 'enums';
import { useTypedSelector } from 'hooks';
import { selectPartPosts, selectPostsIsLoading, selectPostsView } from 'store/selectors';
import { classNames } from 'utils';

interface PostsListProps {
    className?: string;
}

const getSkeletons = (view: PostsView): ReactElement[] =>
    new Array(PostsView.TILE === view ? 8 : 3)
        .fill(0)
        .map((item, i) => <PostItemSkeleton key={i} view={view} />);

export const PostsList = memo((props: PostsListProps): ReactElement => {
    const { className } = props;

    const posts = useTypedSelector(selectPartPosts);
    const isLoading = useTypedSelector(selectPostsIsLoading);
    const view = useTypedSelector(selectPostsView);

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
