import React, {useState, useEffect } from 'react';
import Select from 'react-select'
import CreatableSelect from "react-select/creatable";
// import { useNavigate } from "react-router-dom";
import './style.css'
import '../style.css'

import { categories, products } from './data.js';


const AddProduct = () => {

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [checked, setChecked] = useState([false, false]);
  const [geoLoc, setGeoLoc] = useState("");
  const [price, setPrice] = useState("");

  // const [error, setError] = useState();
  // const [loading, setLoading] = useState(false);

  
  const AddCategory = () => (
    <div style = {{width: '252px'}}>
      <Select
        defaultValue={selectedCategory}
        isClearable
        onChange={handleSelectedCategory} 
        options={categories}
      />
    </div>
  );

  const handleSelectedCategory = (newValue) => {
    setSelectedCategory(newValue)
    console.log('newValue', newValue)
    console.log('selectedCategory', selectedCategory)
  }


  useEffect(() => {setSelectedProduct(selectedProduct)
    console.log('selectedCategory after useEffect', selectedCategory)
  }, [selectedCategory])

  const AddProduct = ({options}) => (
    <div style = {{width: '252px'}}>
      <CreatableSelect
        defaultValue={selectedProduct}
        isClearable
        onChange={handleSelectedProduct}  
        options={options}
      />
    </div>
  )
  
  const handleSelectedProduct = (newValue) => {
    setSelectedProduct(newValue)
    console.log('newValue', newValue)
    console.log('selectedProduct', selectedProduct)
  }

  useEffect(() => {setSelectedProduct(selectedProduct) // force update in this render
    console.log('selectedProduct after useEffect', selectedProduct)}, [selectedProduct])
  
  const handleCheckBoxChange = (position) => {
    const updatedCheckedState = [0,1].map((item, index) =>
      index === position ? true : false
    );
    setChecked( () => updatedCheckedState);
    console.log(checked)
  }

  useEffect(() => {setChecked(checked) // force update in this render
    console.log('checked after useEffect', checked)}, [checked])

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
    category: selectedCategory,
    product: selectedProduct,
    retail: checked[0],
    geoloc: geoLoc,
    price: price
    }
    console.log(`New Product added:`, newProduct);
  }

return (
  <>
    <div style = {{margin: '50px'}}> </div> 
    <h2 className='add-product-title' style={{margin: '10px'}}>Add a product</h2>
    <form
      id="add-a-product"
      className="make-me-flex-2"
      onSubmit={handleSubmit}
      aria-label="add-a-product"
      style={{marginTop: '0px'}}
    >
      <div>
        <h3 className= "sign-up-in-field-title">Category</h3>
        <AddCategory />
      </div>

      <div>
        <h3 className= "sign-up-in-field-title" >Product name</h3>
        <AddProduct options = {selectedCategory? products[selectedCategory.value] : null} />
        <h3 className= "sign-up-in-field-title" style={{fontSize: '12px', margin: 0, marginTop: '3px'}}>Choose or type to create</h3>
      </div>

      <div>
        <h3 className= "sign-up-in-field-title">Food origin</h3>
        <div style = {{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '252px'}}>
          <div>
            <input
              type="checkbox"
              id = "check-box-0"
              name = "retail"
              value = "retail"
              checked={checked[0]}
              onChange={() => handleCheckBoxChange(0)}
            />
            <label htmlFor='check-box-retail'> Retail </label>
          </div>
          <div>
            <input
              type="checkbox"
              id = "check-box-1"
              name = "household"
              value = "household"
              checked={checked[1]}
              onChange={() => handleCheckBoxChange(1)}
            />
            <label htmlFor='check-box-household'> Household </label>
          </div>
        </div>
      </div>

      <div>
        <h3 className= "sign-up-in-field-title">Location</h3>
        <input
          type="text"
          name="text"
          value={geoLoc}
          onChange={e => {setGeoLoc(e.target.value), console.log(geoLoc)}}
          placeholder=""
          required
          className="input-sign-in-up"
        />
      </div>

      <div>
        <h3 className= "sign-up-in-field-title">Price (£)</h3>
          <input
            type="number"
            name="price"
            value={price}
            onChange={e => setPrice(e.target.value)}
            placeholder="£0.50"
            required
            className="input-sign-in-up"
          />
      </div>

      <div>
        <h3 className= "sign-up-in-field-title">Upload a picture</h3>
          <input
            type="file"
            name="file"
            // value={}
            // onChange={handleInput}
            placeholder="Img"
            required
          />
      </div>

      <input
          type="submit"
          className="submit-button"
          value="Submit"
        />
    </form>
      {/* {error && (
        <p style={{textAlign: center}} id="error">
          {error}
        </p>
      )}
      {loading && (
        <p style={{textAlign: center}} id="loading">
          Loading . . .
        </p>
      )} */}
    </>
  );
};

export default AddProduct;
