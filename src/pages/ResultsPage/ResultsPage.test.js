import { default as ResultsPage } from '.';
import { screen } from '@testing-library/react';

describe('Results Page', () => {


    xtest('it renders with title "FLOURISH"', async () => {

   
        renderWithProviders(<ResultsPage />)
        const heading = screen.getAllByRole('heading')[0];
        expect(heading.textContent).toMatch(/FLOURISH/i);
    }); 

});
