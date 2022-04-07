import { default as Spinner } from '.';
import { screen } from '@testing-library/react';

describe('MainPage', () => {

    test('it renders an svg with class "spinner" ', () => {

        renderWithProviders(<Spinner />)
        const spinner = screen.getByTestId('svg-spinner');
        expect(spinner).toHaveClass('spinner')
    });

}); 
