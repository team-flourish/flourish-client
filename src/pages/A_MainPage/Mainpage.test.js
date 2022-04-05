import { default as MainPage } from '.';
import { screen, render } from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom'
import { act } from 'react-dom/test-utils';


// const mockedUseNavigate = jest.fn();

// jest.mock('react-router-dom', () => {
//   const actualNav = jest.requireActual('react-router-dom');
//   return {
//     ...actualNav,
//     useNavigation: () => ({
//       navigate: mockedUseNavigate,
//     }),
//   };
// });

describe('MainPage', () => {

    test('it renders with title "FLOURISH"', () => {
        render(<MainPage />, {wrapper: MemoryRouter})
        const heading = screen.getByRole('heading');
        expect(heading.textContent).toMatch(/FLOURISH/i);
    });

    // test('it calls use Navigate when handleSubmit for Log in', () => {
    //     // Render Main Page
    //     act(() => {render(<MainPage />, {wrapper: MemoryRouter}) });
    //     // Expect Log in button 
    //     const button = screen.queryByRole('button', {name: /log/i});
    //     expect(button).toBeInTheDocument;              
    //     // await after clicking submit
    //      await act( async () => {
    //         button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
    //         });
    //     // Expect useNavigate to have been called once
    //     expect(mockedUseNavigate).toHaveBeenCalledTimes(1)
      
    // });

    // test.skip('it calls use Navigate when handleSubmit for Sign Up', () => {
    //     // Render Main Page
    //     act(() => {render(<MainPage />, {wrapper: MemoryRouter}) });
    //     // Expect Log in button 
    //     const button = screen.queryByRole('button', {name: /sign/i});
    //     expect(button).toBeInTheDocument;              
    //     // await after clicking submit
    //      await act( async () => {
    //         button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
    //         });
    //     // Expect useNavigate to have been called once
    //     expect(mockedUseNavigate).toHaveBeenCalledTimes(1)
      
    // });



});
 