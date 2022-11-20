import { memo, ReactElement } from 'react';

import classes from './ViewSwitcher.module.scss';

import ListIcon from 'assets/image/list.svg';
import TileIcon from 'assets/image/tile.svg';
import { PostsView } from 'enums';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { selectPostsView } from 'store/selectors';
import { postsActions } from 'store/slices';
import { classNames } from 'utils';

interface ViewSwitcherProps {
    className?: string;
}

export const ViewSwitcher = memo((props: ViewSwitcherProps): ReactElement => {
    const { className } = props;

    const dispatch = useAppDispatch();

    const view = useTypedSelector(selectPostsView);

    const changePostsView = (): void => {
        dispatch(
            postsActions.setPostsView(
                view === PostsView.LIST ? PostsView.TILE : PostsView.LIST,
            ),
        );
    };

    return (
        <div className={classNames(classes.ViewSwitcher, {}, [className])}>
            <div
                onClick={changePostsView}
                className={classNames(
                    classes.tile,
                    { [classes['active']]: view === PostsView.TILE },
                    [],
                )}
            >
                <img src={TileIcon} alt="tile" />
            </div>
            <div
                onClick={changePostsView}
                className={classNames(
                    classes.list,
                    { [classes['active']]: view === PostsView.LIST },
                    [],
                )}
            >
                <img src={ListIcon} alt="list" />
            </div>
        </div>
    );
});
