import { memo, useCallback, useEffect } from 'react';

import classes from './Main.module.scss';

import { Button, ButtonTheme, PostsList, ViewSwitcher } from 'components';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { fetchPosts } from 'store/middlewares';
import { selectShownPostsCount } from 'store/selectors';
import { postsActions } from 'store/slices';
import { ReturnComponentType } from 'types';
import { classNames } from 'utils';

export const Main = memo((): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const shownPostsCount = useTypedSelector(selectShownPostsCount);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    const onShowMore = useCallback(() => {
        dispatch(postsActions.increaseShownPostsCount());
    }, [dispatch]);

    return (
        <div className={classNames(classes.Main, {}, [])}>
            <h2 className={classes.title}>Главные новости</h2>
            <ViewSwitcher className={classes.view} />
            <PostsList />
            {shownPostsCount < 10 && (
                <Button
                    className={classes.btn}
                    theme={ButtonTheme.OUTLINE}
                    onClick={onShowMore}
                >
                    Больше новостей
                </Button>
            )}
        </div>
    );
});
