import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import { default as MainPage } from '.';
import {MemoryRouter} from 'react-router-dom'
import { act } from 'react-dom/test-utils';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => {
  const actualNav = jest.requireActual('react-router-dom');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedUseNavigate,
    }),
  };
});

describe('Main Page Use Nav', () => {

test('it calls a handleSubmit for Log in', () => {

    const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => {
  const actualNav = jest.requireActual('react-router-dom');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedUseNavigate,
    }),
  };
});
    // Test first render and componentDidMount
    act(() => {
      render(<MainPage />, {wrapper: MemoryRouter})
    });
    const button = screen.queryByRole('button', {name: /log/i});
    expect(button).toBeInTheDocument;
    //console.log(button)
  
    // Test second render and componentDidUpdate
     await act( async () => {
         let valueP = button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
         console.log(valueP)
        });
   
        expect(mockedUseNavigate).toHaveBeenCalledTimes(1)
  
  });
});
