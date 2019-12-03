
const cartItemsReducerDefaultState = [];

export default (state = cartItemsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return action.cart
      default:
          return state;
  }
};