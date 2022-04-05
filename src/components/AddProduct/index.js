import React, { useState, useEffect } from 'react';
import Select from 'react-select'
import CreatableSelect from "react-select/creatable";
// import { useNavigate } from "react-router-dom";
import './style.css'
import '../style.css'

import Map from '../Map';
import { categories, products } from './data.js';

const AddProduct = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isRetail, setIsRetail] = useState(true);
    const [mapCenter, setMapCenter] = useState(null);
    const [location, setLocation] = useState(null);
    const [price, setPrice] = useState("");
    const [expiry, setExpiry] = useState((new Date()).toISOString().slice(0, 10));

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(location => {
            setMapCenter({
                lat: location.coords.latitude,
                lng: location.coords.longitude
            });
        }, console.log);
    }, []);

    const handleCheckBoxChange = (e) => {
        setIsRetail(e.target.value === "retail");
    }

    const handleLocationSearch = new Function();

    const handleMapClick = (val) => {
        setLocation({ lat: val.lat, lng: val.lng })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            category: selectedCategory,
            product: selectedProduct,
            retail: isRetail,
            location: location,
            price: price
        }
        console.log(`New Product added:`, newProduct);
    }

    return (
        <form
            id="add-a-product"
            className="make-me-flex-2"
            onSubmit={handleSubmit}
            aria-label="New Product Form"
        >
            <h2 className='add-product-title'>Add a product</h2>

            <div className="form-control">
                <label className="sign-up-in-field-title">Upload a picture</label>
                <input
                    type="file"
                    name="file"
                    placeholder="Img"
                />
            </div>

            <div className="form-control">
                <label className="sign-up-in-field-title" htmlFor="category">Category</label>
                <Select
                    defaultValue={selectedCategory}
                    isClearable
                    onChange={setSelectedCategory}
                    options={categories}
                    id="category" 
                    className="react-select-component"
                />
            </div>

            {selectedCategory && 
                <div className="form-control">
                    <label className="sign-up-in-field-title" htmlFor="product">Product name</label>
                    <CreatableSelect
                        defaultValue={selectedProduct}
                        isClearable
                        onChange={setSelectedProduct}
                        options={selectedCategory ? products[selectedCategory.value] : []}
                        id="product" 
                        className="react-select-component"
                    />
                    <span className="sign-up-in-field-title">Choose or type to create</span>
                </div>
            }

            <div className="form-control" style={{marginBottom: 0}}>
                <label id="food-origin-label" className="sign-up-in-field-title">Food origin</label>
                <div className="flex-row space-around" aria-label="Food Origin" aria-labelledby="food-origin-label">
                    <div>
                        <input
                            type="checkbox"
                            id="retail-checkbox"
                            name="retail"
                            value="retail"
                            checked={isRetail}
                            onChange={handleCheckBoxChange}
                        />
                        <label htmlFor='retail-checkbox'> Retail </label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="household-checkbox"
                            name="household"
                            value="household"
                            checked={!isRetail}
                            onChange={handleCheckBoxChange}
                        />
                        <label htmlFor='household-checkbox'> Household </label>
                    </div>
                </div>
            </div>
            
            {isRetail ? 
                <div className="form-control">
                    <label className="sign-up-in-field-title" htmlFor="price">Price (£)</label>
                    <input
                        id="price"
                        className="input-sign-in-up"
                        type="number"
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                        placeholder="e.g. 0.50"
                        required
                    />
                </div>
            :
                <div className="form-control">
                    <label className="sign-up-in-field-title" htmlFor="expiry">Expiry</label>
                    <input id="expiry" type="date" value={expiry} onChange={e => setExpiry(e.target.value)} />
                </div>
            }

            <div className="form-control">
                <label className="sign-up-in-field-title" htmlFor="location">Location</label>
                <input
                    id="location"
                    className="input-sign-in-up margin-b"
                    type="text"
                    onChange={handleLocationSearch}
                    placeholder="jump to postcode..."
                />
                <Map center={mapCenter} marker={location} onMapClick={handleMapClick}/>
            </div>

            <input
                type="submit"
                className="submit-button"
                value="Submit"
            />
        </form>
    );
};

export default AddProduct;
