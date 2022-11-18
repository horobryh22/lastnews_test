import type { RouteObject } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import { Main, NotFound } from 'pages';
export enum AppRoute {
    MAIN = 'main',
    NOT_FOUND = 'not_found',
    ERROR = 'error',
}

export const RoutePath: Record<AppRoute, string> = {
    [AppRoute.MAIN]: '/',
    [AppRoute.NOT_FOUND]: '/not_found',
    [AppRoute.ERROR]: '*',
};

export const routeConfig: RouteObject[] = [
    { path: RoutePath[AppRoute.MAIN], element: <Main /> },
    { path: RoutePath[AppRoute.NOT_FOUND], element: <NotFound /> },
    {
        path: RoutePath[AppRoute.ERROR],
        element: <Navigate to={RoutePath[AppRoute.NOT_FOUND]} />,
    },
];
