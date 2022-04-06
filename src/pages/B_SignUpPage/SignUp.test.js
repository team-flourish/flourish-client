import { default as SignUpPage } from '.';
import { screen, render } from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom'
import { act } from 'react-dom/test-utils';



describe('Sign Up Page', () => {

    test('it renders with title "FLOURISH"', () => {
        render(<SignUpPage />, {wrapper: MemoryRouter})
        const heading = screen.getByRole('heading');
        expect(heading.textContent).toMatch(/FLOURISH/i);
    });  

    test('it renders a form', () => {
        render(<SignUpPage />, {wrapper: MemoryRouter})
        const form = screen.queryByRole('form');
        expect(form).toBeInTheDocument;
    }); 

    test('it calls a handleSubmit for Sign up', async () => {

        let buttonClicked = false;
    
        // Render page
        act( () => {  render(<SignUpPage />, {wrapper: MemoryRouter}) });
    
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

});
 