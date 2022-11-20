import { memo, ReactElement, useCallback } from 'react';

import classes from './PostItem.module.scss';

import { Button, ButtonTheme } from 'components/button/Button';
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

    const onReadFullPost = useCallback(() => {
        window.open(post.guid.rendered, '_blank');
    }, [post.guid.rendered]);

    if (view === PostsView.LIST) {
        const excerpt = post.excerpt.rendered
            .replace(new RegExp(/&#\d{3,4};/gi), '')
            .replace(new RegExp(/&hellip;/gi), '...');

        return (
            <div className={classNames('', {}, [className, classes[view]])}>
                <div className={classes.header}>
                    <h2 className={classes.postTitle}>{title}</h2>
                    <span>{date}</span>
                </div>
                {excerpt}
                <Button
                    className={classes.btn}
                    theme={ButtonTheme.OUTLINE}
                    onClick={onReadFullPost}
                >
                    Читать далее
                </Button>
            </div>
        );
    }

    return (
        <div className={classNames('', {}, [className, classes[view]])}>
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
