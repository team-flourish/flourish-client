import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser, setLocation as setReduxLocation } from "../../actions";
import { Map, Spinner } from "../../components";
import { Header, NavBar } from "../../layout";

import "./style.css";

const SetLocationPage = () => {
    const user = useSelector(state => state.user);
    const userLocation = useSelector(state => state.location);
    const mapCenter = {
        lat: userLocation[0], lng: userLocation[1]
    };
    const [location, setLocation] = useState({
        lat: user.location.latitude, lng: user.location.longitude
    });
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const navigateTo = useNavigate();

    const handleSubmitLocation = async (e) => {
        e.preventDefault();
        setLoading(true);
        if(user.location.latitude !== location.lat || user.location.longitude !== location.lng ){
            const reqBody = {
                updated_latitude: location.lat,
                updated_longitude: location.lng
            };
            const response = await fetch(`${API_HOST}/users/${user.id}/location`, {
                method: 'PATCH',
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify(reqBody)
            });
            if(response.status == 201) {
                dispatch(setUser({
                    ...user,
                    location: {
                        latitude: location.lat,
                        longitude: location.lng
                    }
                }));
                dispatch(setReduxLocation(location));
            } else {
                alert("Could not update location.");
            }
        }
        navigateTo("/settings");
        setLoading(false);
    };

    return (
        <>
        <Header />
        {loading ?
            <Spinner />
        :
            <main className="setlocation">
                <Map 
                    center={mapCenter} 
                    marker={location} 
                    onMapClick={setLocation}
                />
                <input 
                    className="user-settings-button" 
                    type="button" 
                    value="set location"
                    onClick={handleSubmitLocation}
                />
            </main>
        }
        <NavBar />
        </>
    );
};

export default SetLocationPage;
