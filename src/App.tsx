import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store';
import AppNavigation from './appNavigation/appNavigation';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <AppNavigation />
        </Provider>
    );
};

export default App;
