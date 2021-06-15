import { combineReducers } from 'redux';
import authReducer from './auth';
import noticationReducer from './notification';

// Create rootReducers to combine all reducers
const rootReducers = combineReducers({
    auth: authReducer,
    notification: noticationReducer,
});

export default rootReducers;