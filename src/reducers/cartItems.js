
const cartItemsReducerDefaultState = [];

export default (state = cartItemsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      console.log('FROM REDUX:')
      console.log(action.cart)
      return state;
      default:
          return state;
  }
};