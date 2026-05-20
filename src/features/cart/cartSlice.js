import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart(state, action) {
      const item = action.payload;

      const existingItem = state.cart.find((product) => product.id === item.id);

      state.totalQuantity++;

      if (!existingItem) {
        state.cart.push({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
      }

      state.totalPrice += item.price;
    },

    removeFromCart(state, action) {
      const id = action.payload;

      const existingItem = state.cart.find((item) => item.id === id);

      if (!existingItem) return;

      state.totalQuantity--;
      state.totalPrice -= existingItem.price;

      if (existingItem.quantity === 1) {
        state.cart = state.cart.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
