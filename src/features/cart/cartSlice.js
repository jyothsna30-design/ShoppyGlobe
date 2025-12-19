import { createSlice } from "@reduxjs/toolkit";
//creating a cartslice
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {//addtocart reducer, check if the product is in cart then increment the quantity otherwise add the new product to the cart and quantity as 1.
    addToCart(state, action) {
      const item = state.items.find(i => i.id === action.payload.id);
      if (item) {
        item.quantity++
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    //remove an item from the cart
    removeFromCart(state, action) {
      state.items = state.items.filter(i => i.id !== action.payload);
    },

    //updates the quantity of an item
    updateQuantity(state, action) {
      const item = state.items.find(i => i.id === action.payload.id);
      if (item && action.payload.quantity >= 1) {
        item.quantity = action.payload.quantity;
      }
    },
    //clears all the items
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;