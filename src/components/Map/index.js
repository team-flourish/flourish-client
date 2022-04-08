import React from "react";
import { useSelector } from "react-redux";

import GoogleMapReact from "google-map-react";
import { MapMarker } from "..";
import "./style.css";

const Map = ({ center, marker, productData, onMapClick }) => {
    const defaultCenter = {
        lat: 51.517673199104046, 
        lng: -0.1276473535731588
    };

    return (
        <div id="map">
            <GoogleMapReact
            bootstrapURLKeys={{key: "AIzaSyAUdg_BN8ypemI1syHUMWMgHbq3aLBmeVw"}} 
            defaultCenter={defaultCenter} 
            center={center} 
            defaultZoom={14}
            onClick={onMapClick || new Function()}
            >
                {marker && 
                    <MapMarker
                    lat={marker.lat}
                    lng={marker.lng}
                    />
                }
                {productData &&
                    productData.map(product => (
                        <MapMarker
                        key={product.product_id} 
                        lat={product.latitude}
                        lng={product.longitude}
                        />
                    ))
                }
            </GoogleMapReact>
        </div>
    );
};

export default Map;
