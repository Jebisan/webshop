import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import cartItemsReducer from '../reducers/cartItems';
import cartInfoReducer from '../reducers/cartInfo';
import productsReducer from '../reducers/products';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
        cartItems: cartItemsReducer,
      //requests: requestsReducer
        cartInfo: cartInfoReducer,
        products: productsReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};