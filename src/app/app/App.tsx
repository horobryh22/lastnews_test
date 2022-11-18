import React from 'react';

import { AppRouter } from '../appRouter';

import { Header } from 'components';
import { ReturnComponentType } from 'types';

const App = (): ReturnComponentType => {
    return (
        <div>
            <Header />
            <AppRouter />
        </div>
    );
};

export default App;
