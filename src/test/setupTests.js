import React from 'react';

import '@testing-library/jest-dom';
import { MemoryRouter } from "react-router-dom";
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { reducer } from "../reducers";

const TestProviders = ({ initState }) => {
    initState ||= { loading: false,
                    isLoggedIn: false, 
                    token: null, 
                    error: null }
    const testStore = createStore(() => reducer(initState, { type: '@@INIT' }), applyMiddleware(thunk))

    return ({ children }) => (
            <MemoryRouter>
              <Provider store={testStore}>{children}</Provider>
            </MemoryRouter>
      );
}

const renderWithProviders = (ui, options={}) => {
    let TestWrapper = TestProviders(options)
    render(ui, { wrapper: TestWrapper, ...options })
}



global.renderWithProviders = renderWithProviders
global.React = React;



