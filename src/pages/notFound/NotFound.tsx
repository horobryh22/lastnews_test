import classes from './NotFound.module.scss';

import { ReturnComponentType } from 'types';
import { classNames } from 'utils';

export const NotFound = (): ReturnComponentType => {
    return (
        <div className={classNames(classes.NotFoundPage, {}, [])}>
            Страница не найдена
        </div>
    );
};
