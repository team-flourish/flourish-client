import React from "react";

import GoogleMapReact from "google-map-react";
import { MapMarker } from "..";
import "./style.css";

const Map = () => {
    const center = {
        lat: 51.517673199104046, 
        lng: -0.1276473535731588
    };

    return (
        <div id="map" style={{backgroundImage: `url('http://placehold.jp/396x396.png')`}}>
            <GoogleMapReact
            bootstrapURLKeys={{key: "AIzaSyAUdg_BN8ypemI1syHUMWMgHbq3aLBmeVw"}} 
            defaultCenter={center} 
            defaultZoom={14}
            >
                <MapMarker
                lat={center.lat}
                lng={center.lng}
                />
            </GoogleMapReact>
        </div>
    );
};

export default Map;
