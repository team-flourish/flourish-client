import { default as LogInPage } from '.';
import { screen, render } from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom'
import { act } from 'react-dom/test-utils';



describe('Log In Page', () => {

    test('it renders with title "FLOURISH"', () => {
        render(<LogInPage />, {wrapper: MemoryRouter})
        const heading = screen.getByRole('heading');
        expect(heading.textContent).toMatch(/FLOURISH/i);
    });  

    test('it renders a form', () => {
        render(<LogInPage />, {wrapper: MemoryRouter})
        const form = screen.queryByRole('form');
        expect(form).toBeInTheDocument;
    }); 

    test('it calls a handleSubmit for Sign up', async () => {

        let buttonClicked = false;
    
        // Render page
        act( () => {  render(<LogInPage />, {wrapper: MemoryRouter}) });
    
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

});
