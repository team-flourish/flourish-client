import { default as ImageSelector } from '.';
import { screen, fireEvent} from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { useState } from 'react';



describe('Image selector', () => {

    test('it renders with ...', () => {
        renderWithProviders(<ImageSelector />)
        const element = screen.getByLabelText('image-input')
        expect(element).toBeInTheDocument()
    });  




});

const setup = () => {
    renderWithProviders(<ImageSelector />)
    const input = screen.getByLabelText('image-input')
    return {
      input
    }
  }

  test('It should not allow letters to be inputted', () => {
    const {input} = setup()
    expect(input.type).toBe("file") // empty before
    // fireEvent.change(input, {target: {files: [null, null]}})
    // expect(input.value).toBe('') //empty after
  })

  test('It should not allow letters to be inputted', () => {
    const {input} = setup()
    expect(input.type).toBe("file") // empty before
    fireEvent.change(input, {target: {files: [null, null]}})
    // expect(input.value).toBe('') //empty after
  })



  test('it renders with ... 2', () => {
    renderWithProviders(<ImageSelector />)
    const element = screen.getByLabelText('+')
    expect(element).toBeInTheDocument()
    
});  

  
