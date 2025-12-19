import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import searchSliceReducer from  "../features/cart/products/searchSlice"


//Configuring the store with cart and search slice reducers
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    search: searchSliceReducer,
  },
});
