import { default as UserPage } from '.';
import { screen } from '@testing-library/react';

describe('User Page', () => {

    test('it renders with title "FLOURISH"', () => {
        renderWithProviders(<UserPage />)
        const heading = screen.getAllByRole('heading')[0];
        expect(heading.textContent).toMatch(/FLOURISH/i);
    }); 

});
