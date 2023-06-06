import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { CartState } from "~/types/cart";
import type { ProductCardProps } from "~/types/product";

const initialState: CartState = {
  items: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<ProductCardProps>) => {
      const existingItem = state.items.find(
        (item) => item.name === action.payload.name
      );
      if (existingItem) {
        existingItem.quantity++;
        state.totalPrice = state.totalPrice + existingItem.price;
      } else {
        state.items.push(action.payload);
        state.totalPrice = state.totalPrice + action.payload.price;
      }
    },
    incrementItemInCart: (state, action: PayloadAction<string>) => {
      const incrementedItem = state.items.find(
        (item) => item.name === action.payload
      );
    },
    decrementItemInCart: (state, action: PayloadAction<string>) => {
      const decrementedItem = state.items.find(
        (item) => item.name === action.payload
      );
    },
    deleteItemFromCart: (state, action: PayloadAction<string>) => {
      const deletedItem = state.items.find(
        (item) => item.name === action.payload
      );
      if (deletedItem) {
        state.totalPrice =
          state.totalPrice - deletedItem?.price * deletedItem.quantity;
      }
      state.items = state.items.filter((item) => item.name !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addItemToCart,
  deleteItemFromCart,
  incrementItemInCart,
  decrementItemInCart,
} = cartSlice.actions;

export default cartSlice.reducer;
