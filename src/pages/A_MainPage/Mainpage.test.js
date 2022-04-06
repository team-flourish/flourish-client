import { default as MainPage } from '.';
import { screen } from '@testing-library/react';
// import {MemoryRouter} from 'react-router-dom'



describe('MainPage', () => {

    test('it renders with title "FLOURISH"', () => {
        renderWithProviders(<MainPage />)
        const heading = screen.getByRole('heading');
        expect(heading.textContent).toMatch(/FLOURISH/i);
    });  

    test('it renders a log in button', () => {
        renderWithProviders(<MainPage />)
        const loginbutton = screen.queryByRole('button', {name: /log in/i});
        expect(loginbutton).toBeInTheDocument;
    }); 

    test('it renders a sign up button"', () => {
        renderWithProviders(<MainPage />)
        const signupbutton = screen.queryByRole('button', {name: /sign up/i});
        expect(signupbutton).toBeInTheDocument;
    }); 
});
 