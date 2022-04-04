import React from "react";

import MarkerIcon from "../../images/icons/marker.svg";
import "./style.css";

const MapMarker = () => {
    return (
        <img className="mapMarker" src={MarkerIcon}/>
    );
};

export default MapMarker;
