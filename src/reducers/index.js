const initState = {  };

const reducer = (state=initState, action) => {
    switch(action.type){
        case 'ACTION':
            return { ...state };
        default:
            return state;
    };
};

export { reducer };
