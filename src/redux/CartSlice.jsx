import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const index = state.cartItems.findIndex(i => i.id === item.id);

      if (index >= 0) {
        state.cartItems[index].quantity += 1;
        state.cartItems[index].totalPrice += item.price;
      } else {
        state.cartItems.push({
          ...item,
          quantity: 1,
          totalPrice: item.price,
        });
      }

      state.totalQuantity += 1;
      state.totalAmount += item.price;
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
