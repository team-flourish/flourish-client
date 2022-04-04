import React, { useEffect, useState } from 'react';
import Select from 'react-select'
// import { useNavigate } from "react-router-dom";


import './style.css'
import '../style.css'

const handleSubmit = () => {
    alert(`New Product clicked! - {selectedOption}`);
  }

  const options = [
    { value: 'bakery', label: 'Bakery' },
    { value: 'diary', label: 'Diary' },
    { value: 'eggs', label: 'Eggs' },
    { value: 'fish', label: 'Fish' },
    { value: 'fruit', label: 'Fruit' },
    { value: 'meat', label: 'Meat' },
    { value: 'vegetables', label: 'Vegetables' },
    { value: 'other', label: 'Other' },
  ]
  
  const MyComponent = () => (
    <Select options={options} />
  )

  const data = options;

  const groupStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };
  const styles = {
    backgroundColor: '#EBECF0',
    borderRadius: '2em',
    color: '#172B4D',
    display: 'inline-block',
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: '1',
    minWidth: 1,
    padding: '0.16666666666667em 0.5em',
    textAlign: 'center',
  };
  
  const formatGroupLabel = () => (
    <div style={groupStyles}>
      <span>{data.label}</span>
      <span style={styles}>{data.options.length}</span>
    </div>
  );
  


  const MyComponent2 = () => (
   <div style = {{width: '252px'}}>
    <Select
      defaultValue={data[1].label}
      options={data}
      formatGroupLabel={formatGroupLabel}
    />
    </div>
  );

  // const MyComponent3 = () => (
  //   <div style = {{width: '252px'}}>
  //    <Select
  //      onChange={handleChange}
  //      options={options}
  //    />
  //    </div>
  //  );


//   <div className="App">
//   <Select
//     defaultValue={selectedOption}
//     onChange={handleChange}
//     options={options}
//   />
// </div>



const AddProduct = () => {

const [selectedOption, setSelectedOption] = useState(null);


const handleChange = (selectedOption) => { 
  setSelectedOption();
  let data = selectedOption
  console.log( data);
}

useEffect(() => handleChange())


const MyComponent3 = () => (
  <div style = {{width: '252px'}}>
   <Select
     defaultValue={options[0]}
     isClearable
     onChange={handleChange}
     options={options}
   />
   </div>
 );

    return (
    <>
     
     {/* <MyComponent />
     <MyComponent2 /> */}
     
  
      <form
        id="add-a-product"
        className="make-me-flex-2"
        onSubmit={handleSubmit}
        aria-label="add-a-product"  
      >
        <div>
          <h3 className= "sign-up-in-field-title">Category</h3>
          <MyComponent3 />
        </div>
          <div>
            <h3 className= "sign-up-in-field-title">Product name</h3>
            <input
              type="email"
              name="email"
              // value={formData.password}
              // onChange={handleInput}
              placeholder=""
              required
              className="input-sign-in-up"
            />
          </div>
          <div>
            <h3 className= "sign-up-in-field-title">Postcode?</h3>
            <input
              type="password"
              name="password"
              // value={formData.password}
              // onChange={handleInput}
              placeholder=""
              required
              className="input-sign-in-up"
            />
          </div>
          <div>
            <h3 className= "sign-up-in-field-title">Upload a picture</h3>
            <input
              type="password"
              name="confirmPassword"
              // value={formData.password}
              // onChange={handleInput}
              placeholder=""
              required
              className="input-sign-in-up"
            />
          </div>
        <input
          type="submit"
          className="submit-button"
          value="Submit"
        />
      </form>
      {/* {error && (
        <div className="pb-4 text-center" id="error">
          {error}
        </div>
      )}
      {loading && (
        <div className="pb-4 text-center" id="loading">
          Logging in . . .
        </div>
      )} */}
    </>
  );
};

export default AddProduct;
