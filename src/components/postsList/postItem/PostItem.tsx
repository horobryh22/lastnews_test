import { memo, ReactElement } from 'react';

import classes from './PostItem.module.scss';

import { PostsView } from 'enums';
import { Post } from 'store/types';
import { classNames } from 'utils';
interface PostItemProps {
    className?: string;
    post: Post;
    view: PostsView;
}

export const PostItem = memo((props: PostItemProps): ReactElement => {
    const { className, post, view = PostsView.TILE } = props;

    const date = new Date(post.date).toLocaleTimeString().slice(0, -3);
    const title = post.title.rendered.replace(new RegExp(/&#\d{3,4};/gi), '');

    if (view === PostsView.LIST)
        return (
            <div
                className={classNames(classes.PostItem, {}, [className, classes[view]])}
            ></div>
        );

    return (
        <div className={classNames(classes.PostItem, {}, [className, classes[view]])}>
            <a
                href={post.guid.rendered}
                className={classes.postTitle}
                target="_blank"
                rel="noreferrer"
            >
                {title}
            </a>
            <span className={classes.date}>{date}</span>
        </div>
    );
});
