import { type CartItemProps } from "./product";

export interface CartState {
  items: CartItemProps[];
  totalPrice: number;
}
