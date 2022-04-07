const setToken = (token) => ({
    type: 'SET_TOKEN',
    payload: token
});

const setLoginStatus = (status) => ({
    type: 'SET_LOGIN',
    payload: status
});

const setUser = (user) => ({
    type: 'SET_USER',
    payload: user
});

const setLocation = (location) => ({
    type: 'SET_LOCATION',
    payload: location
});

const setCategories = (categories) => ({
    type: 'SET_CATEGORIES',
    payload: categories
});

const setError = (error) => ({
    type: 'SET_ERROR',
    payload: error
});

const getLoginStatus = (access_token) => {
    return async dispatch => {
        if(!access_token){
            dispatch(setLoginStatus(false));
        } else {
            try {
                const response = await fetch(`${API_HOST}/login`, {
                    method: "GET",
                    headers: new Headers({
                        "Authorization": `Bearer ${access_token}`
                    })
                });
                if(response.status === 200){
                    const user = await response.json();
                    dispatch(setUser(user));
                    dispatch(setToken(access_token));
                    dispatch(setLoginStatus(true));
                } else {
                    dispatch(setLoginStatus(false));
                }
            } catch (err) {
                console.warn(err.message);
                dispatch(setError(err.message));
            }
        }
    };
};

const getLocation = (user) => {
    return async dispatch => {
        navigator.geolocation.getCurrentPosition(location => {
            const latLong = new Float64Array([
                location.coords.latitude, 
                location.coords.longitude
            ]);
            dispatch(setLocation(latLong));
        }, () => {
            if(user){
                dispatch(setLocation(new Float64Array([
                    user.location.latitude,
                    user.location.longitude
                ])));
            } else {
                dispatch(setLocation(new Float64Array([
                    51.517673199104046, 
                    -0.1276473535731588
                ])));
            }
        }, {
            enableHighAccuracy: true
        });
    };
};

import { categories as categoriesFromFile } from "../data";
const getCategories = () => {
    return async dispatch => {
        const response = await fetch(`${API_HOST}/products/categories`);
        if(response.status === 200) {
            const data = await response.json();
            dispatch(setCategories(data));
        } else {
            dispatch(setCategories(categoriesFromFile));
        }
    };
};

export { getLoginStatus, getLocation, getCategories };
