const initialState = {
  orderData: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ORDERDATA':
      return {
        ...state,
        orderData: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
