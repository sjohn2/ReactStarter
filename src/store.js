import React from 'react';

import {createStore,combineReducers} from 'redux';
import cartReducer from './reducers/cartReducer';
import productReducer from './reducers/productReducer';

const store = createStore(combineReducers({cartReducer,productReducer}),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;