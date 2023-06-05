import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { CartState } from "~/types/cart";
import type { ProductCardProps } from "~/types/product";

const initialState: CartState = {
  items: [],
  totalPrice: 0,
  totalQuantity: 0,
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
      state.totalQuantity = state.totalQuantity + action.payload.quantity;
    },
    deleteItemFromCart: (state, action: PayloadAction<string>) => {
      const deletedItem = state.items.find(
        (item) => item.name === action.payload
      );
      state.items = state.items.filter((item) => item.name !== action.payload);
      state.totalQuantity = state.totalQuantity - deletedItem.quantity;
      state.totalPrice =
        state.totalPrice - deletedItem.price * deletedItem.quantity;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItemToCart, deleteItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;
