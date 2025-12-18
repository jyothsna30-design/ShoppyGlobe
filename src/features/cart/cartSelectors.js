export const selectCartItems = (state) => state.cart.items;

// Total number of items in cart (for header badge)
export const selectTotalCartItems = (state) =>
  state.cart.items?.reduce((total, item) => total + item.quantity, 0) || 0;

// Total cart price (useful for checkout)
export const selectCartTotalPrice = (state) =>
  state.cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );