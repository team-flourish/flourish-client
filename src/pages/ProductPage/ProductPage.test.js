import { default as ProductPage } from '.';
import { screen } from '@testing-library/react';

describe('Product Page', () => {

    test('it renders with title "FLOURISH"', () => {
        renderWithProviders(<ProductPage />)
        const heading = screen.getAllByRole('heading')[0];
        expect(heading.textContent).toMatch(/FLOURISH/i);
    }); 

});
