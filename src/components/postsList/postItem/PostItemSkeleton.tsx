import { memo, ReactElement } from 'react';

import classes from './PostItem.module.scss';

import { Skeleton } from 'components/skeleton/Skeleton';
import { PostsView } from 'enums';
import { classNames } from 'utils';

interface PostItemSkeletonProps {
    className?: string;
    view: PostsView;
}

export const PostItemSkeleton = memo((props: PostItemSkeletonProps): ReactElement => {
    const { className, view = PostsView.TILE } = props;

    if (view === PostsView.LIST)
        return (
            <div
                className={classNames(classes.PostItemSkeleton, {}, [
                    className,
                    classes[view],
                ])}
            >
                <div className={classNames('', {}, [className, classes[view]])}>
                    <div className={classes.header}>
                        <Skeleton width={200} height={20} className={classes.postTitle} />
                        <Skeleton width={40} height={20} />
                    </div>
                    <Skeleton width="100%" height={80} />
                    <Skeleton width={160} height={30} className={classes.btn} />
                </div>
            </div>
        );

    return (
        <div
            className={classNames(classes.PostItemSkeleton, {}, [
                className,
                classes[view],
            ])}
        >
            <Skeleton height={20} width="100%" className={classes.postTitle} />
            <Skeleton height={15} width={40} />
        </div>
    );
});
