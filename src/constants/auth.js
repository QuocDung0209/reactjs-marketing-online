export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const LOGOUT = 'LOGOUT';

export const SHOW_LOADING = 'SHOW_LOADING';
export const HIDE_LOADING = 'HIDE_LOADING';


// CRUD_GET_MANY_FAILURE,
// CRUD_GET_MANY_SUCCESS,
// CRUD_GET_ONE_FAILURE,
// CRUD_GET_ONE_SUCCESS,
// crudGetMany,
//   crudGetOne,
//   showNotification

// import { createActions } from 'redux-actions';

// export const actions = createActions(
//   {
//     COMPLETE_NEW_PASSWORD: newPassword => ({ newPassword }),
//     CHANGE_PASSWORD: (oldPassword, newPassword) => ({
//       oldPassword,
//       newPassword
//     }),
//     FORGOT_PASSWORD: username => ({ username }),
//     GET_PERMISSIONS: undefined,
//     RESET_PASSWORD: (username, verificationCode, password) => ({
//       username,
//       verificationCode,
//       password
//     }),
//     SET_CURRENT_USER: currentUser => ({ currentUser }),
//     VERIFIED_CONTACT: undefined,
//     VERIFY_USER_ATTRIBUTE: attribute => ({ attribute }),
//     VERIFY_USER_ATTRIBUTE_SUBMIT: (attribute, verificationCode) => ({
//       attribute,
//       verificationCode
//     })
//   },
//   { prefix: 'AUTH' }
// );

// export const sagaActions = createActions(
//   {
//     RESET_PASSWORD_SUCCESS: undefined,
//     SET_IS_LOADING: {
//       PERMISSIONS: isLoading => ({ isLoading })
//     },
//     SET_PERMISSIONS: permissions => ({ permissions }),
//     VERIFIED_CONTACT: verifiedContact => ({ verifiedContact })
//   },
//   { prefix: 'AUTH/SAGAS' }
// );
