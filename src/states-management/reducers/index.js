import { combineReducers } from 'redux';
import authReducer from './auth';
import noticationReducer from './notification';
import productsReducer from './products';

// Create rootReducers to combine all reducers
const rootReducers = combineReducers({
    auth: authReducer,
    notification: noticationReducer,
    products: productsReducer,
});

export default rootReducers;