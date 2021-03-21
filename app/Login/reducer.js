const initialState = {
isLoggedIn:false,
isLoading:false,
};

const login = (state = initialState, actions) => {
    switch (actions.type) {
        case 'LOGIN_ATTEMPT':
            return { ...state, isLoggedIn: false, isLoading: true };
            // break;
        case 'LOGIN_SUCCESS':
            return { ...state, isLoggedIn: true, isLoading: false };
            // break;
        case 'LOGIN_FAILED':
            return { ...state, isLoggedIn: false, isLoading: false };
            // break;
            default:
                return state;
        }
    };

export default login;
