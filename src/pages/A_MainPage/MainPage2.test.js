import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import {MemoryRouter} from 'react-router-dom'
import { default as MainPage } from '.';


// let valueP;

// it.skip('it calls a handleSubmit for Log in', () => {
//   // Test first render and componentDidMount
//   act(() => {
//     render(<MainPage />, {wrapper: MemoryRouter})
//   });
//   const button = screen.queryByRole('button', {name: /log/i});
//   expect(button).toBeInTheDocument;
//   //console.log(button)

//   // Test second render and componentDidUpdate
//     act(() => {
//        valueP = button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
//        console.log(valueP)
//       });
 
//     expect(valueP).toBe(true);

// });

// it.skip('it calls a handleSubmit for Sign Up', () => {
//     // Test first render and componentDidMount
//     act(() => {
//       render(<MainPage />, {wrapper: MemoryRouter})
//     });
//     const button = screen.queryByRole('button', {name: /sign/i});
//     expect(button).toBeInTheDocument;
//     //console.log(button)
  
//     // Test second render and componentDidUpdate
//       act(() => {
//          valueP = button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
//          console.log(valueP)
//         });
   
//       expect(valueP).toBe(true);
  
//   });

//   it('CheckboxWithLabel changes the text after click', () => {
//     const {queryByRole} = render(<MainPage />, {wrapper: MemoryRouter})
  
//     expect(queryByRole('button', {name: /sign/i})).toBeTruthy();
  
//     fireEvent.click(queryByRole('button', {name: /sign/i}));
  
//     expect(queryByRole('button', {name: /sign/i})).toBeTruthy();
//   });
  
  
  
