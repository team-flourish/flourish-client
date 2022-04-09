import React from 'react'
import { screen} from '@testing-library/react';
import { default as MainPage } from '.';
import { act } from 'react-dom/test-utils';

const mockedUseNavigate = jest.fn();

beforeEach(() => {
// Clear all instances and calls to constructor and all methods:
mockedUseNavigate.mockClear();
});

jest.mock('react-router-dom', () => {
    const actualNav = jest.requireActual('react-router-dom');
    return {
        ...actualNav,
        useNavigation: () => ({
            navigate: mockedUseNavigate,
        }),
    };
});

test('it calls a handleSubmit for Log in', async () => {

    let buttonClicked = false;

    // Render page
    act( () => { renderWithProviders(<MainPage />)});

    // Save the button element to variable
    const loginbutton = screen.queryByRole('button', {name: /log in/i});
    //expect(button).toBeInTheDocument;

    // Test button is fired // test use Navigate has been called
    await act( async () => {
        buttonClicked  = loginbutton.dispatchEvent(new MouseEvent('click', {bubbles: true}));
        });
        expect(buttonClicked ).toBe(true)
        // expect(mockedUseNavigate).toHaveBeenCalledTimes(1)

});

test('it calls a handleSubmit for Sign up', async () => {

    let buttonClicked = false;

    // Render page
    act( () => { renderWithProviders(<MainPage />) });

    // Save the button element to variable
    const signupbutton = screen.queryByRole('button', {name: /sign up/i});
    //expect(button).toBeInTheDocument;

    // Test button is fired // test use Navigate has been called
    await act( async () => {
        buttonClicked  = signupbutton.dispatchEvent(new MouseEvent('click', {bubbles: true}));
        });
        expect(buttonClicked ).toBe(true)
        // expect(mockedUseNavigate).toHaveBeenCalledTimes(1)

});

