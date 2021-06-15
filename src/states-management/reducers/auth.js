import * as authActionContants from '../../constants/auth';

const initialState = {
    isLoggedIn: !!localStorage.getItem('user') // Convert to boolean value
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case authActionContants.LOGIN:
            return state;
        case authActionContants.LOGIN_SUCCESS:
            const { data } = action.payload;
            localStorage.setItem('user', JSON.stringify(data.accessToken));
            return {
                ...state,
                ...data,
                isLoggedIn: true
            };
        case authActionContants.LOGIN_FAILED:
            // const { error } = action.payload;
            return state;
        case authActionContants.LOGOUT:
            localStorage.removeItem('user');
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