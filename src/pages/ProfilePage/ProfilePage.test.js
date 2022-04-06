import { default as ProfilePage } from '.';
import { screen } from '@testing-library/react';

describe('Profile Page', () => {

    xtest('it renders with title "FLOURISH"', () => {
        renderWithProviders(<ProfilePage />)
        const heading = screen.getAllByRole('heading')[0];
        expect(heading.textContent).toMatch(/FLOURISH/i);
    }); 

});
