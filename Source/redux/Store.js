import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { appReducer } from './Reducers';

const rootReducer = combineReducers({ state: appReducer });

const store = createStore(
    rootReducer,
    applyMiddleware(thunk),
);

export default store;