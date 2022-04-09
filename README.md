# flourish-client

<!-- badges -->
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://www.mit.edu/~amini/LICENSE.md)
[![GitHub latest commit](https://img.shields.io/github/last-commit/team-flourish/flourish-client.svg)](https://github.com/team-flourish/flourish-client/commit/)
[![GitHub forks](https://img.shields.io/github/forks/team-flourish/flourish-client.svg)](https://github.com/team-flourish/flourish-client)

Client-side repo for the Flourish group project. Main project repo can be found [here](https://github.com/team-flourish/flourish).

## Installation & Usage

1. Clone the repo `git clone git@github.com:team-flourish/flourish-client.git`
2. Enter the directory `cd flourish-client`
3. Install dependencies `npm install`
   
* `npm run dev` to start the client server in development mode.
* `npm run build` to create a production build of the app in `/build`.
* `npm run test` to run tests.
* `npm run coverage` to check test coverage.

## Design & Implementation

### Technologies

* React
* Redux
* Google Map API
* Cloudinary
* Jest

### Figma designs

* [Main Page](assets/figma/main.png)
* [Signup](assets/figma/signup.png)
* [Login](assets/figma/login.png)
* [Results](assets/figma/results.png)
* [Add a product](assets/figma/add_product.png)
* [Map View](assets/figma/map.png)
* [User Page](assets/figma/user.png)
* [User Profile](assets/figma/profile.png)
* [Product details](assets/figma/product.png)

## Changelog

* Added a Spinner component to show a loading animation while the app is loading.
* Added a smartphone style scrollbar.
* Control added to form that centers the map on the inputted postcode.
* Used redux to store information that's used around the app inside a globally accessible state.
* Changed product list to sort by most recent instead of nearest.
* Tag line added to main page.
* Added warning when deleting account.
* Delete product added when viewing own product.
* Changed styles
  * "Filter by food type" darkened.
  * Time posted ago changed to grey.
  * Links changed to green.
  * Tag line on main page changed to an off-black and font weight reduced.

## Fixed Bugs

- [x] `defaultCenter` prop on google map component being changed instead of `center`.
- [x] Form controls not updating the state properly.
- [x] Loading animation is styled behind page components.
- [x] `onChange` handler on `ImageSelector` component is not called with the correct argument.
- [x] Map and user icons on the nav bar do not go to the correct destination.
- [x] Categories passed into `FilterList` component do not get used.
- [x] Time ago posted display shows blank or -1 for items just posted.
- [x] Filter buttons too tall and text not properly aligned.
- [x] Geolocation doesn't store correctly.
- [x] location and distance are sometimes `null`.
- [x] Prices and user ratings do not have the correct number of decimal places.
- [x] Page finishes loading even when location is not yet loaded.

## Pitfalls & Discoveries

* Components imported from `react-select` were not interacting with their `onChange` prop in the expected way. It turns out that they pass the value directly to the handler instead of a reference to the element like a regular `<input>`.
* The geolocation data taken from the device, while correct, was changing to an incorrect value upon being stored into a object variable. The geolocation returned by the device is a `double` data type meaning that when stored into a JS object, the interpreted value gets changed. This was fixed by storing the latitude and longitude into a `Float64Array` instead of an object.

## Remaining Bugs

- [ ] Ratings sometimes don't show after revisiting an already rated product.
- [ ] Food description and tag sticks out of the container for longer names.
- [ ] Infinite loading when there are no products to show.

## Improvements & Future Features

* Minor
  * Custom dialogs for account deletion warning and setting radius instead of the built-in alert and prompt functions.
  * Change styling to be consistent across a wider range of devices.
  * Error messages to provide the user with feedback when something goes wrong.
  * Display "Loading..." instead of "No items" while products are loading.
  * Ability for user to turn geolocation off.
* Major
  * AI to provide product recommendations based on the user's rating a viewing history.
  * Metadata validation on the forms to make sure the images posted have been taken at the claimed time and place.
  * Interface with a food information database instead of letting the user type what they want.
  * Detection for graphic images and a reporting system on products to flag app misuse.
  * React Native for cross-platform compatibility.

## License

* [MIT License](https://www.mit.edu/~amini/LICENSE.md)
