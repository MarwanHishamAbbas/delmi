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
      state.totalQuantity = state.totalQuantity + action.payload.quantity;
    },
    deleteItemToCart: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItemToCart, deleteItemToCart } = cartSlice.actions;

export default cartSlice.reducer;
