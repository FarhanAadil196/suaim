import { combineReducers, createStore } from 'redux';
import checkoutReducer from './checkoutReducer';

const rootReducer = combineReducers({
  checkout: checkoutReducer,
  // other reducers...
});

const store = createStore(
  rootReducer,
  // for redux devtools
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
