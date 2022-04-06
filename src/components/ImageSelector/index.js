import React, { useEffect, useState } from "react";

import "./style.css";

const ImageSelector = ({ onChange, value }) => {
    const [file, setFile] = useState(value || null);
    const [image, setImage] = useState(null);

    const handleChange = (e) => {
        setFile(e.target.files[0] || null);
        onChange && onChange(e.target.files[0]);
    };

    useEffect(() => {
        const showImage = () => {
            const filereader = new FileReader();
            filereader.onload = (e) => {
                setImage(filereader.result);
            };
            filereader.readAsDataURL(file);
        };
        file && showImage();
    }, [file]);

    const labelStyle = image ? {
        backgroundImage: `url('${image}')`,
        height: '350px'
    } : {
        border: "7px dashed #aaa",
        color: "#aaa"
    }; 

    return (
        <div>
            <label id="imageInputLabel" style={labelStyle} htmlFor="imageInput">
                { !image && '+'}
            </label>
            <input 
                id="imageInput" 
                type="file" 
                onChange={handleChange}
            />
        </div>
    );
};

export default ImageSelector;
