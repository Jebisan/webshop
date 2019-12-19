const cartInfoReducerDefaultState = 0;

export default (state = cartInfoReducerDefaultState, action) => {
  switch (action.type) {
      case 'UPDATE_AMOUNT':
        return action.amount
      default:
          return state;
  }

  
};