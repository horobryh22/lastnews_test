import { memo, useEffect } from 'react';

import classes from './Main.module.scss';

import { Button, ButtonTheme, PostsList } from 'components';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { fetchPosts } from 'store/middlewares';
import { selectPosts } from 'store/selectors';
import { ReturnComponentType } from 'types';
import { classNames } from 'utils';

export const Main = memo((): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const posts = useTypedSelector(selectPosts);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    return (
        <div className={classNames(classes.Main, {}, [])}>
            <h2 className={classes.title}>Главные новости</h2>
            <PostsList posts={posts} />
            <Button className={classes.btn} theme={ButtonTheme.OUTLINE}>
                Все новости
            </Button>
        </div>
    );
});
