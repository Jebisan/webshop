
const cartItemsReducerDefaultState = [];

export default (state = cartItemsReducerDefaultState, action) => {
  switch (action.type) {
    case 'UPDATE_CART':
      return action.cart

      default:
          return state;
  }

  
};