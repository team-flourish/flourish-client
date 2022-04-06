const loading = () => ({
    type: 'LOADING',
    payload: true
});

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

const setError = (error) => ({
    type: 'SET_ERROR',
    payload: error
});

const getLoginStatus = (access_token) => {
    return async dispatch => {
        dispatch(loading());
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
                    throw new Error("invalid token");
                }
            } catch (err) {
                console.warn(err.message);
                dispatch(setError(err.message));
            }
        }
    };
};

export { getLoginStatus, setError };
