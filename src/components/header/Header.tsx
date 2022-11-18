import { memo, ReactElement } from 'react';

import classes from './Header.module.scss';

import { classNames } from 'utils';

export const Header = memo((): ReactElement => {
    return <div className={classNames(classes.Header, {}, [])}></div>;
});
