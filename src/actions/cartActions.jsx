export const addToCart = (product) => {
  return async (dispatch) => {
    dispatch({ type: 'ADD_TO_CART_REQUEST' });
    try {
      dispatch({ type: 'ADD_TO_CART_SUCCESS', payload: product });
    } catch (error) {
      dispatch({ type: 'ADD_TO_CART_FAILURE', error: error.message });
    }
  };
};
  
export const removeFromCart = (productId) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: { id: productId },
  };
};
  
export const clearCart = () => {
  return {
    type: 'CLEAR_CART',
  };
};
  