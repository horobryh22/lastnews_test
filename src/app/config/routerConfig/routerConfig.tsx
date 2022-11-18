import type { RouteObject } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import { Main, NotFound, PostDetails } from 'pages';

export enum AppRoute {
    MAIN = 'main',
    NOT_FOUND = 'not_found',
    POST_DETAILS = 'post_details',
    ERROR = 'error',
}

export const RoutePath: Record<AppRoute, string> = {
    [AppRoute.MAIN]: '/',
    [AppRoute.POST_DETAILS]: '/posts/',
    [AppRoute.NOT_FOUND]: '/not_found',
    [AppRoute.ERROR]: '*',
};

export const routeConfig: RouteObject[] = [
    { path: RoutePath[AppRoute.MAIN], element: <Main /> },
    { path: RoutePath[AppRoute.POST_DETAILS] + ':id', element: <PostDetails /> },
    { path: RoutePath[AppRoute.NOT_FOUND], element: <NotFound /> },
    {
        path: RoutePath[AppRoute.ERROR],
        element: <Navigate to={RoutePath[AppRoute.NOT_FOUND]} />,
    },
];
