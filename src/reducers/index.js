const initState = { isLoggedIn: null, location: null, token: null, user: null, categories: null, error: null };

const reducer = (state=initState, action) => {
    switch(action.type){
        case 'SET_CATEGORIES':
            return { ...state, categories: action.payload };
        case 'SET_TOKEN':
            return { ...state, token: action.payload };
        case 'SET_USER':
            return { ...state, user: action.payload };
        case 'SET_LOCATION':
            return {
                ...state,
                location: action.payload
            };
        case 'SET_LOGIN':
            return {
                ...state, 
                isLoggedIn: action.payload, 
                error: null, 
                user: action.payload ? state.user : null
            };
        case 'SET_ERROR':
            return { ...state, error: action.payload };
        default:
            return state;
    };
};

export { reducer };
