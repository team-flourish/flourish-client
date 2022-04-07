import { default as ProductList } from '.';
import { screen } from '@testing-library/react';

import { categories, products } from '../../data.js';

import { categoryData, productData } from  '../../test/testdata.js'

describe('Product List', () => {

    xtest('it renders with .....', () => {
        renderWithProviders(<ProductList />)
        const heading = screen.getAllByRole('heading')[0];
        expect(heading.textContent).toMatch(/FLOURISH/i);
    }); 

});

