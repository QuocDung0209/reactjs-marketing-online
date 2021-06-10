import { createStore, compose, applyMiddleware } from 'redux';
import rootReducers from '../reducers';

// This file use to create store - apply middlewares - integrate dev tools

// process: a varible of node.js to check environment
const composeEnhancers = process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false,
    })
    : compose;

const configureStore = () => {
    const middlewares = [
        // list middlewares
    ];
    const enhancers = [applyMiddleware(...middlewares)];
    const store = createStore(rootReducers, composeEnhancers(...enhancers));
    return store;
};

export default configureStore;