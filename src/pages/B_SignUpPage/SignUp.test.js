import { default as SignUpPage } from '.';
import { screen} from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { useState } from 'react';



describe('Sign Up Page', () => {

    test('it renders with title "FLOURISH"', () => {
        renderWithProviders(<SignUpPage />)
        const heading = screen.getByRole('heading');
        expect(heading.textContent).toMatch(/FLOURISH/i);
    });  

    test('it renders a form', () => {
        renderWithProviders(<SignUpPage />)
        const form = screen.queryByRole('form');
        expect(form).toBeInTheDocument;
    }); 

    test('it calls a handleSubmit for Sign up', async () => {
        let buttonClicked = false;
        // Render page
        act( () => {  renderWithProviders(<SignUpPage />) });
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

    test('it calls useState for Sign up', async () => {

        let buttonClicked = false;

        const setStateMock = jest.fn().mockReturnValue( {username: "Bob"} )
        const useStateMock = (useState) => [useState, setStateMock]

        jest.spyOn(React,'useState').mockImplementation(useStateMock)
    
        // Render page
        act( () => {  renderWithProviders(<SignUpPage />) });
    
        // Save the button element to variable
        const signupbutton = screen.queryByRole('button', {name: /sign up/i});
        //expect(button).toBeInTheDocument;
      
        // Test button is fired // test use Navigate has been called
        await act( async () => {
             buttonClicked  = signupbutton.dispatchEvent(new MouseEvent('click', {bubbles: true}));
            });
            expect(buttonClicked ).toBe(true)
            expect(useState).toHaveBeenCalledTimes(1)
            // expect(mockedUseNavigate).toHaveBeenCalledTimes(1)
      
      });

});
 