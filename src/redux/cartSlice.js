import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      const quantityChange = action.payload.quantity || 1;

      if (existingItem) {
        existingItem.quantity += quantityChange;
        if (existingItem.quantity <= 0) {
          state.items = state.items.filter(item => item.id !== existingItem.id);
        }
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

