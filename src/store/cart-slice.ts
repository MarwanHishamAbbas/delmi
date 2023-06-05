import { type Product } from "@prisma/client";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
  value: number;
}

const initialState: CartState = {
  value: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<Product>) => {
      console.log(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItemToCart } = cartSlice.actions;

export default cartSlice.reducer;
