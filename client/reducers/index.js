import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import products from './products';
import info from './info';

const rootReducer = combineReducers({products, info, routing: routerReducer});

export default rootReducer;
