import { memo } from 'react';

import classes from './PostDetails.module.scss';

import { ReturnComponentType } from 'types';
import { classNames } from 'utils';

export const PostDetails = memo((): ReturnComponentType => {
    return <div className={classNames(classes.PostDetails, {}, [])}>PostDetails</div>;
});
