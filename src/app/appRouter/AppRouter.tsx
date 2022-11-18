import React, { ReactElement } from 'react';

import { useRoutes } from 'react-router-dom';

import { routeConfig } from '../config';

export const AppRouter = (): ReactElement => {
    const elements = useRoutes(routeConfig);

    return <div className="page-wrapper">{elements}</div>;
};
