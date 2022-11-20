import { memo, ReactElement } from 'react';

import classes from './ViewSwitcher.module.scss';

import ListIcon from 'assets/image/list.svg';
import TileIcon from 'assets/image/tile.svg';
import { PostsView } from 'enums';
import { useView } from 'hooks';
import { classNames } from 'utils';

interface ViewSwitcherProps {
    className?: string;
}

export const ViewSwitcher = memo((props: ViewSwitcherProps): ReactElement => {
    const { className } = props;

    const [view, toggleView] = useView();

    return (
        <div className={classNames(classes.ViewSwitcher, {}, [className])}>
            <div
                onClick={toggleView}
                className={classNames(
                    classes.tile,
                    { [classes['active']]: view === PostsView.TILE },
                    [],
                )}
            >
                <img src={TileIcon} alt="tile" />
            </div>
            <div
                onClick={toggleView}
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
