import React, { Suspense } from 'react';

import { AppRouter } from '../appRouter';

import { ReturnComponentType } from 'types';

const App = (): ReturnComponentType => {
    return (
        <div>
            <Suspense fallback="">
                <AppRouter />
            </Suspense>
        </div>
    );
};

export default App;
