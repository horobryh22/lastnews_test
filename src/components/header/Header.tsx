import { memo, ReactElement } from 'react';

import classes from './Header.module.scss';

import { Button, HamburgerMenu } from 'components';
import { classNames } from 'utils';

export const Header = memo((): ReactElement => {
    return (
        <header className={classNames(classes.Header, {}, [])}>
            <HamburgerMenu />
            <h2 className={classes.logoTitle}>MUSEUM.RU</h2>
            <Button className={classes.btn}>Войти</Button>
        </header>
    );
});
