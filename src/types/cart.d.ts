import { type ProductCardProps } from "./product";

export interface CartState {
  items: ProductCardProps[];
  totalPrice: number;
}
