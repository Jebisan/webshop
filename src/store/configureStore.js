import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import cartItemsReducer from '../reducers/cartItems';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
        cartItems: cartItemsReducer,
      //requests: requestsReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};