import { memo, ReactElement } from 'react';

import classes from './HamburgerMenu.module.scss';

import { classNames } from 'utils';

interface HamburgerMenuProps {
    className?: string;
}

export const HamburgerMenu = memo((props: HamburgerMenuProps): ReactElement => {
    const { className } = props;

    return (
        <div className={classNames(classes.HamburgerMenu, {}, [className])}>
            <label className={classes.menuBtn}>
                <span></span>
            </label>
        </div>
    );
});
