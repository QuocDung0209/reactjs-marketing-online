import * as authActionContants from '../../constants/auth';

const initialState = {};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case authActionContants.LOGIN:
            return state;
        case authActionContants.LOGIN_SUCCESS:
            const { data } = action.payload;
            return {
                ...state,
                ...data
            }
        case authActionContants.LOGIN_FAILED:
            const { error } = action.payload;
            return {
                ...state,
                ...error
            }
        default:
            return state;
    }
};

export default reducer;