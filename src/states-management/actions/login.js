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

/**
 * Step 1: loginRequest()
 * Step 2: Reset state
 * Step 3: loginSucsess(data response)
 */

export const loginRequest = () => {
    return dispatch => {
        dispatch(login());
        authApiService.login()
            .then(response => {
                dispatch(loginSuccess(response && response.data));
            })
            .catch(error => {
                dispatch(loginFailed(error));
            });
    };
};