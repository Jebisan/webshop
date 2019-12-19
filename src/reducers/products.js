const productsReducerDefaultState = [];

export default (state = productsReducerDefaultState, action) => {
  switch (action.type) {
      case 'UPDATE_PRODUCTS':
        return action.products
      default:
          return state;
  }

  
};