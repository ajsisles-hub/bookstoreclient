import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './component/App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducers from './module';

// Modern, robust store setup with built-in Thunk and DevTools configuration
const store = configureStore({
    reducer: reducers,
    // Redux Toolkit automatically sets up Redux Thunk middleware 
    // and Redux DevTools extension links natively!
});

const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);