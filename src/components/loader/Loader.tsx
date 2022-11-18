import classes from './Loader.module.scss';

import { ReturnComponentType } from 'types';
import { classNames, Mods } from 'utils';

interface LoaderProps {
    className?: string;
    onPage?: boolean;
}

export const Loader = (props: LoaderProps): ReturnComponentType => {
    const { className, onPage = false } = props;

    const mods: Mods = {
        [classes.onPage]: onPage,
    };

    return (
        <div className={classNames('', mods, [])}>
            <div className={classNames(classes['lds-ring'], {}, [className])}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};
