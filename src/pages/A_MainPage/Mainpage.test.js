import { default as MainPage } from '.';
import { screen, render } from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom'



describe('MainPage', () => {

    test('it renders with title "FLOURISH"', () => {
        render(<MainPage />, {wrapper: MemoryRouter})
        const heading = screen.getByRole('heading');
        expect(heading.textContent).toMatch(/FLOURISH/i);
    });  

    test('it renders a log in button', () => {
        render(<MainPage />, {wrapper: MemoryRouter})
        const loginbutton = screen.queryByRole('button', {name: /log in/i});
        expect(loginbutton).toBeInTheDocument;
    }); 

    test('it renders a sign up button"', () => {
        render(<MainPage />, {wrapper: MemoryRouter})
        const signupbutton = screen.queryByRole('button', {name: /sign up/i});
        expect(signupbutton).toBeInTheDocument;
    }); 
});
 