import * as authActionContants from '../../constants/auth';

const initialState = {
    isLoggedIn: !!localStorage.getItem('token'), // Convert to boolean value
    username: JSON.parse(localStorage.getItem('username')),
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case authActionContants.LOGIN:
            return state;
        case authActionContants.LOGIN_SUCCESS:
            const { data } = action.payload;
            localStorage.setItem('token', JSON.stringify(data.accessToken));
            localStorage.setItem('username', JSON.stringify(data.username));
            return {
                ...state,
                ...data,
                isLoggedIn: true
            };
        case authActionContants.LOGIN_FAILED:
            // const { error } = action.payload;
            return state;
        case authActionContants.LOGOUT:
            localStorage.removeItem('token');
            localStorage.removeItem('username');
            return {
                ...state,
                isLoggedIn: false
            };
        case authActionContants.SHOW_LOADING:
            return {
                ...state,
                loading: true
            };
        case authActionContants.HIDE_LOADING:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
};

export default reducer;