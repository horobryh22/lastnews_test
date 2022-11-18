import React, { ReactElement, Suspense } from 'react';

import { useRoutes } from 'react-router-dom';

import { routeConfig } from '../config';

import { Loader } from 'components';

export const AppRouter = (): ReactElement => {
    const elements = useRoutes(routeConfig);

    return (
        <Suspense fallback={<Loader onPage />}>
            <div className="page-wrapper">{elements}</div>
        </Suspense>
    );
};
