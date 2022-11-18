import { ButtonHTMLAttributes, ReactElement, ReactNode } from 'react';

import classes from './Button.module.scss';

import { classNames } from 'utils';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: ReactNode;
    theme?: ButtonTheme;
}

export const Button = (props: ButtonProps): ReactElement => {
    const { className, children, theme = ButtonTheme.CLEAR, ...restProps } = props;

    return (
        <button
            {...restProps}
            className={classNames(classes.Button, {}, [className, classes[theme]])}
        >
            {children}
        </button>
    );
};
