import { combineReducers } from 'redux';
import authReducer from './auth';

// Create rootReducers to combine all reducers
const rootReducers = combineReducers({
    auth: authReducer,
});

export default rootReducers;