import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import searchSliceReducer from  "../features/cart/products/searchSlice"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    search: searchSliceReducer,
  },
});
