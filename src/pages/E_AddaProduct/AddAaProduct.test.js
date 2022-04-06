import { default as AddaProduct } from '.';
import { screen, render } from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom'
import { act } from 'react-dom/test-utils';

const mockGeolocation = {
    getCurrentPosition: jest.fn()
      .mockImplementationOnce((success) => Promise.resolve(success({
        coords: {
          latitude: 51.1,
          longitude: 45.3
        }
      })))
  };
  global.navigator.geolocation = mockGeolocation;



describe('Log In Page', () => {

    xtest('it renders with Heading "FLOURISH"', async () => {
        //jest.spyOn(React, "useEffect").mockImplementation(() => {});
        await act( async  () => {  render(<AddaProduct />, {wrapper: MemoryRouter}) });
        const heading = screen.getAllByRole('heading')[0];
        expect(heading.textContent).toMatch(/FLOURISH/i);
    });  

    xtest('it renders with title "Add a Product"', async () => {
        //jest.spyOn(React, "useEffect").mockImplementation(() => {});
        await act( async  () => {  render(<AddaProduct />, {wrapper: MemoryRouter}) });
        const heading = screen.getAllByRole('heading')[1];
        expect(heading.textContent).toMatch(/Add a product/i);
    });  

    xtest('it renders a form', () => {
        render(<AddaProduct />, {wrapper: MemoryRouter})
        const form = screen.queryByRole('form');
        expect(form).toBeInTheDocument;
    }); 

    xtest('it calls a handleSubmit for Sign up', async () => {

        let buttonClicked = false;
    
        // Render page
        act( () => {  render(<AddaProduct />, {wrapper: MemoryRouter}) });
    
        // Save the button element to variable
        const loginbutton = screen.queryByRole('button', {name: /submit/i});
        //expect(button).toBeInTheDocument;
      
        // Test button is fired // test use Navigate has been called
        await act( async () => {
             buttonClicked  = loginbutton.dispatchEvent(new MouseEvent('click', {bubbles: true}));
            }); 
            expect(buttonClicked ).toBe(true)
            // expect(mockedUseNavigate).toHaveBeenCalledTimes(1)
      
      });

});
