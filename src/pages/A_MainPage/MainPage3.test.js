const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
   useNavigate: () => mockedUseNavigate, 
 }));

 let navigate = useNavigate();

import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import { default as MainPage } from '.';
import {MemoryRouter, useNavigate} from 'react-router-dom'
import { act } from 'react-dom/test-utils';

describe('Page A', () => {
    
    test.skip('Should navigate from Page A to Page B', () => {
        const { queryByRole } = render(<MainPage />, {wrapper: MemoryRouter})
        queryByRole('button', {name: /sign/i})
        fireEvent.click(queryByRole('button', {name: /sign/i}))
        //expect(mockedUseNavigate).toHaveBeenCalledTimes(1)
        // expect(navigate).toHaveBeenCalledWith('/bpage')
    })


    it('it calls a handleSubmit for Log in', () => {

    
        // Test first render and componentDidMount
        act( () => {
        render(<MainPage />, {wrapper: MemoryRouter})
        });
        const button = screen.queryByRole('button', {name: /log/i});
        expect(button).toBeInTheDocument;
        //console.log(button)

        // Test second render and componentDidUpdate
        act( () => {
              let value = button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
              console.log(value)
            });

        expect(useNavigate()).toHaveBeenCalledTimes(1)
    
    });

})
