import { memo } from 'react';

import classes from './Main.module.scss';

import { ReturnComponentType } from 'types';
import { classNames } from 'utils';

export const Main = memo((): ReturnComponentType => {
    return <div className={classNames(classes.Main, {}, [])}>Главная страница</div>;
});
