import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux'; // connect ReactRouter with Redux
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

import info from './data/comments';
import products from './data/posts';

// object for default data
const defaultState = {
  products: products,
  info: info
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
