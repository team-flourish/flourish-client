const initState = { loading: false, isLoggedIn: null, token: null, user: null, error: null };

const reducer = (state=initState, action) => {
    switch(action.type){
        case 'LOADING':
            return { ...state, loading: action.payload };
        case 'SET_TOKEN':
            return { ...state, token: action.payload };
        case 'SET_USER':
            return { ...state, user: action.payload };
        case 'SET_LOGIN':
            return {
                ...state, 
                isLoggedIn: action.payload, 
                loading: false, 
                error: null, 
                user: action.payload ? state.user : null
            };
        case 'SET_ERROR':
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    };
};

export { reducer };
