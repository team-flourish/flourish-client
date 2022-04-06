import { default as SignUpPage } from '.';
import { screen} from '@testing-library/react';
import { act } from 'react-dom/test-utils';

describe("test multiple states in component", () => {
    let setUsername;
    let setEmail;
    let setPasswrd;
    let setConfPass;

  beforeEach(() => {
    setUsername = jest.fn().mockReturnValue( {username: "Bob"} )
    setEmail = jest.fn().mockReturnValue( {username: "Bob"} )
    setPasswrd = jest.fn().mockReturnValue( {username: "Bob"} )
    setConfPass = jest.fn().mockReturnValue( {username: "Bob"} )

    global.React.useState = jest
      .fn()
      .mockImplementationOnce(x => [x, setUsername])
      .mockImplementationOnce(x => [x, setEmail])
      .mockImplementationOnce(x => [x, setPasswrd])
      .mockImplementationOnce(x => [x, setConfPass]);

     
  });

  xtest("should test useState was called", async () => {

    let buttonClicked = false;

    act( () => {  renderWithProviders(<SignUpPage />) });

    const signupbutton = screen.queryByRole('button', {name: /sign up/i});

    await act( async () => {
        buttonClicked  = signupbutton.dispatchEvent(new MouseEvent('click', {bubbles: true}));
       });
       expect(buttonClicked ).toBe(true)

    // expect(setEmail).toHaveBeenCalled();
  });

//   it("should test button two", () => {
//     wrapper
//       .find("button")
//       .at(1)
//       .simulate("click");
//     expect(setLoading).toHaveBeenCalledWith(true);
//     expect(setText).toHaveBeenCalledWith("text set by button");
//   });
});
