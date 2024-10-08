import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/CartReducer';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
