import * as authApiService from '../../web-apis/authApiService';
import * as authActionContants from '../../constants/auth';

export const login = () => {
    return {
        type: authActionContants.LOGIN
    };
}

export const loginSuccess = data => {
    return {
        type: authActionContants.LOGIN_SUCCESS,
        payload: {
            data
        }
    };
}

export const loginFailed = error => {
    return {
        type: authActionContants.LOGIN_FAILED,
        payload: {
            error
        }
    };
}

export const showLoading = () => ({
    type: authActionContants.SHOW_LOADING
})

export const hideLoading = () => ({
    type: authActionContants.HIDE_LOADING
})

/**
 * Step 1: loginRequest()
 * Step 2: Reset state
 * Step 3: loginSucsess(data response)
 */

export const loginRequest = (payload) => {
    return dispatch => {
        dispatch(login());
        dispatch(showLoading());
        authApiService.login(payload)
            .then(response => {
                dispatch(loginSuccess(response && response.data));
                dispatch(hideLoading());
            })
            .catch(error => {
                dispatch(loginFailed(error));
                dispatch(hideLoading());
            });
    };
};

export const logout = () => ({
    type: authActionContants.LOGOUT
});

export const logoutRequest = () => dispatch => dispatch(logout());