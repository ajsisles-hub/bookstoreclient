import React from 'react';
import { render } from '@testing-library/react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk'; // Try changing to 'import thunk from "redux-thunk"' if this fails
import reducers from '../../src/module'; // Assuming this is your root reducer that combines all reducers


const renderWithRedux = (
  ui,
  {
    initialState,
    // Safely build the store explicitly here
    store = createStore(reducers, initialState, applyMiddleware(thunk)),
  } = {}
) => {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  };
};

export default renderWithRedux;