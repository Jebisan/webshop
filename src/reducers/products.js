const productsReducerDefaultState = [];

export default (state = productsReducerDefaultState, action) => {
  switch (action.type) {
      case 'UPDATE_PRODUCTS':
        console.log("HELLO FROM REDUCEr")
        console.log(action.products)
        return action.products
      default:
          return state;
  }

  
};