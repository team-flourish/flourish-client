import React from "react";
// import { useNavigate } from "react-router-dom";

import './style.css'
import '../style.css'

const handleSubmit = () => {
    alert("New Product clicked!");
  }

const AddProduct = () => {

    return (
    <>
      <form
        id="add-a-product"
        className="make-me-flex-2"
        onSubmit={handleSubmit}
        aria-label="add-a-product"  
      >
        <div>
          <h3 className= "sign-up-in-field-title">Category</h3>
          <input
            type="text"
            name="name"
            // value={formData.name}
            // onChange={handleInput}
            placeholder=""
            required
            className="input-sign-in-up"
          />
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
