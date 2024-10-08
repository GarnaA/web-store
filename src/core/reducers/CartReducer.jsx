const initialState = {
  items: [],
  loading: false,
  error: null,
};
  
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART_REQUEST':
      return { ...state, loading: true };

    case 'ADD_TO_CART_SUCCESS':
      return {
        ...state,
        loading: false,
        items: [...state.items, action.payload],
    };

    case 'ADD_TO_CART_FAILURE':
      return { ...state, loading: false, error: action.error };
  
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
    };

    case 'CLEAR_CART':
      return { ...state, items: [] };
  
    default:
      return state;
  }
};
  
export default cartReducer;
  