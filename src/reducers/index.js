const initState = { loading: false, isLoggedIn: false, token: null, error: null };

const reducer = (state=initState, action) => {
    switch(action.type){
        case 'LOADING':
            return { ...state, loading: action.payload };
        case 'SET_TOKEN':
            return { ...state, token: action.payload };
        case 'SET_LOGIN':
            return { ...state, isLoggedIn: action.payload, loading: false, error: null };
        case 'SET_ERROR':
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    };
};

export { reducer };
