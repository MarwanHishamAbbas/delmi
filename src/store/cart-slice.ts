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
      const inCartItem = state.items.find(
        (item) => item.name === action.payload.name
      );
      if (!inCartItem) {
        state.items.push(action.payload);
      } else {
        inCartItem.quantity++;
      }
    },
    incrementItemInCart: (state, action: PayloadAction<string>) => {
      const incrementedItem = state.items.find(
        (item) => item.name === action.payload
      );
      if (incrementedItem) {
        incrementedItem.quantity = incrementedItem.quantity + 1;
      }
    },
    decrementItemInCart: (state, action: PayloadAction<string>) => {
      const decrementedItem = state.items.find(
        (item) => item.name === action.payload
      ) as ProductCardProps;
      if (decrementedItem.quantity === 1) {
        state.items = state.items.filter(
          (item) => item.name !== action.payload
        );
      } else {
        decrementedItem.quantity--;
      }
    },
    deleteItemFromCart: (state, action: PayloadAction<string>) => {
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
