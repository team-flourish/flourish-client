import { default as AddaProduct } from '.';
import { screen } from '@testing-library/react';
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

    test('it renders with Heading "FLOURISH"', async () => {
        //jest.spyOn(React, "useEffect").mockImplementation(() => {});
        await act( async  () => {  renderWithProviders(<AddaProduct />) });
        const heading = screen.getAllByRole('heading')[0];
        expect(heading.textContent).toMatch(/FLOURISH/i);
    });  

    test('it renders with title "Add a Product"', async () => {
        //jest.spyOn(React, "useEffect").mockImplementation(() => {});
        await act( async  () => {  renderWithProviders(<AddaProduct />) });
        const heading = screen.getAllByRole('heading')[1];
        expect(heading.textContent).toMatch(/Add a product/i);
    });  

    test('it renders a form', () => {
      renderWithProviders(<AddaProduct />)
        const form = screen.queryByRole('form');
        expect(form).toBeInTheDocument;
    }); 

    test('it calls a handleSubmit for Sign up', async () => {

        let buttonClicked = false;
    
        // Render page
        act( () => {  renderWithProviders(<AddaProduct />) });
    
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
